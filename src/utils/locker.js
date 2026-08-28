/**
 * CPAGrip Content Locker Trigger & Safety Handler
 * Triggers the CPAGrip locker across all "Get Free Book" download CTAs.
 */

const CPAGRIP_SCRIPT_URL = "https://installyourfiles.com/script_include.php?id=1909285";
const TARGET_OFFER_URL = "https://drive.google.com/file/d/1PaYKJmx7fMex56kTVxvYTaP7kVP4eNpA/view?usp=drivesdk";
const DIRECT_LOCKER_URL = "https://installyourfiles.com/file_download.php?id=1909285";

// Track whether we are in the middle of executing a locker call to prevent recursion
let isInvoking = false;

/**
 * Ensures the CPAGrip script tag exists in document head
 */
export function ensureLockerScript() {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`script[src*="installyourfiles.com"]`);
  if (!existing) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = CPAGRIP_SCRIPT_URL;
    script.async = false;
    document.head.appendChild(script);
  }
}

/**
 * Main trigger function called on all "Get Free Book" download buttons.
 */
export function triggerContentLocker(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (e && e.stopPropagation) e.stopPropagation();

  if (typeof window === 'undefined') return;

  if (isInvoking) return;
  isInvoking = true;

  setTimeout(() => {
    isInvoking = false;
  }, 1500);

  // 1. Check for CPAGrip's native functions on window
  const functionsToTry = [
    'call_locker',
    '_cg_call_locker',
    'og_load',
    'CPAGrip_Call_Locker',
    'cpa_locker'
  ];

  for (const fnName of functionsToTry) {
    if (typeof window[fnName] === 'function') {
      try {
        console.log(`[CPAGrip] Invoking window.${fnName}()`);
        window[fnName]();
        return;
      } catch (err) {
        console.warn(`[CPAGrip] Error calling ${fnName}:`, err);
      }
    }
  }

  // 2. If not immediately available, try injecting script and retrying
  ensureLockerScript();

  let attempts = 0;
  const pollInterval = setInterval(() => {
    attempts++;
    for (const fnName of functionsToTry) {
      if (typeof window[fnName] === 'function') {
        clearInterval(pollInterval);
        try {
          console.log(`[CPAGrip] Invoking window.${fnName}() after polling`);
          window[fnName]();
          return;
        } catch (err) {
          console.warn(`[CPAGrip] Error calling ${fnName}:`, err);
        }
      }
    }

    if (attempts >= 10) {
      clearInterval(pollInterval);
      console.warn('[CPAGrip] Content locker script was blocked by browser ad-blocker or iframe sandbox.');
      // If adblocker is blocking installyourfiles.com, open the direct link or offer in new tab
      try {
        window.open(TARGET_OFFER_URL, '_blank');
      } catch (err) {
        window.location.href = TARGET_OFFER_URL;
      }
    }
  }, 100);
}
