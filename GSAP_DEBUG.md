# GSAP Animation Debugging Guide

## What Initializes/Animates the Text?

### 1. **Zoom Text Animation** (`textZoomRef`)
- **Initial State**: Hidden (`opacity: 0`, `scale: 0`)
- **Trigger**: ScrollTrigger with `start: 'top 80%'`
- **Animation**: GSAP `gsap.to()` animates to `opacity: 1`, `scale: 1`
- **Location**: Lines 363-400 in `page.tsx`

### 2. **Falling Letters Text** (`textFallingRef`)
- **Initial State**: Each character hidden (`opacity: 0`, `translateY(-100px)`)
- **Trigger**: ScrollTrigger with `start: 'top 80%'`
- **Animation**: GSAP animates characters with stagger effect
- **Location**: Lines 307-361 in `page.tsx`

## Debugging Checklist

### Step 1: Check if ScrollTrigger is Registered
Open browser console (F12) and run:
```javascript
gsap.registerPlugin(ScrollTrigger)
console.log('ScrollTrigger registered:', ScrollTrigger)
```

### Step 2: Check if Elements Exist
```javascript
// Check zoom text element
const zoomText = document.querySelector('.kitchens-animated_zoomText')
console.log('Zoom text element:', zoomText)
console.log('Current styles:', window.getComputedStyle(zoomText))

// Check falling text element
const fallingText = document.querySelector('.kitchens-animated_fallingText')
console.log('Falling text element:', fallingText)
```

### Step 3: Check ScrollTrigger Instances
```javascript
// See all ScrollTrigger instances
const triggers = ScrollTrigger.getAll()
console.log('Total ScrollTriggers:', triggers.length)
triggers.forEach((trigger, index) => {
  console.log(`Trigger ${index}:`, {
    trigger: trigger.vars.trigger,
    start: trigger.vars.start,
    end: trigger.vars.end,
    isActive: trigger.isActive,
    progress: trigger.progress
  })
})
```

### Step 4: Check Element Positions
```javascript
// Check if elements are in viewport
const zoomText = document.querySelector('.kitchens-animated_zoomText')
if (zoomText) {
  const rect = zoomText.getBoundingClientRect()
  console.log('Zoom text position:', {
    top: rect.top,
    bottom: rect.bottom,
    viewportHeight: window.innerHeight,
    isVisible: rect.top < window.innerHeight && rect.bottom > 0
  })
}
```

### Step 5: Manually Trigger Animation
```javascript
// Test if GSAP animation works manually
const zoomText = document.querySelector('.kitchens-animated_zoomText')
if (zoomText) {
  gsap.to(zoomText, {
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: 'back.out(1.7)',
  })
}
```

### Step 6: Check ScrollTrigger Refresh
```javascript
// Force refresh ScrollTrigger
ScrollTrigger.refresh()
console.log('ScrollTrigger refreshed')
```

### Step 7: Check if initAnimations Function Runs
Add console.log in the code:
```javascript
const initAnimations = () => {
  console.log('initAnimations called')
  console.log('textZoomRef.current:', textZoomRef.current)
  // ... rest of code
}
```

### Step 8: Check Page Load State
```javascript
console.log('Document ready state:', document.readyState)
console.log('Window loaded:', window.performance.timing.loadEventEnd)
```

## Common Issues

### Issue 1: Elements Not Found
**Symptom**: `textZoomRef.current` is `null`
**Solution**: 
- Check if component is mounted
- Verify refs are attached to elements
- Check CSS module class names match

### Issue 2: ScrollTrigger Not Triggering
**Symptom**: Elements exist but animations don't start
**Possible Causes**:
- ScrollTrigger initialized before DOM is ready
- Element positions not calculated correctly
- Trigger point (`start: 'top 80%'`) never reached

**Solution**:
```javascript
// Check trigger point
const trigger = ScrollTrigger.getById('your-trigger-id')
console.log('Trigger start:', trigger.start)
console.log('Current scroll:', window.scrollY)
console.log('Should trigger:', window.scrollY >= trigger.start)
```

### Issue 3: CSS Override
**Symptom**: GSAP sets styles but CSS overrides them
**Solution**: Use `!important` in GSAP or check CSS specificity
```javascript
gsap.set(element, { 
  opacity: 0, 
  scale: 0,
  clearProps: 'all' // Clear conflicting styles
})
```

### Issue 4: Initialization Timing
**Symptom**: Works on refresh but not on initial load
**Solution**: Ensure `initAnimations` runs after page load
```javascript
if (document.readyState === 'complete') {
  initAnimations()
} else {
  window.addEventListener('load', initAnimations)
}
```

## Quick Debug Script

Paste this in browser console to check everything:

```javascript
// Complete debug script
console.log('=== GSAP Animation Debug ===')
console.log('1. ScrollTrigger registered:', typeof ScrollTrigger !== 'undefined')
console.log('2. Document ready:', document.readyState)

const zoomText = document.querySelector('[class*="zoomText"]')
const fallingText = document.querySelector('[class*="fallingText"]')

console.log('3. Zoom text found:', !!zoomText)
if (zoomText) {
  const styles = window.getComputedStyle(zoomText)
  console.log('   - Opacity:', styles.opacity)
  console.log('   - Transform:', styles.transform)
  console.log('   - Position:', zoomText.getBoundingClientRect())
}

console.log('4. Falling text found:', !!fallingText)

const triggers = ScrollTrigger.getAll()
console.log('5. ScrollTrigger instances:', triggers.length)
triggers.forEach((t, i) => {
  console.log(`   Trigger ${i}:`, {
    element: t.vars.trigger?.className,
    start: t.vars.start,
    isActive: t.isActive,
    progress: t.progress
  })
})

console.log('6. Current scroll position:', window.scrollY)
console.log('7. Window height:', window.innerHeight)
```

## What to Look For

1. **Element Existence**: Are the refs attached? Check `textZoomRef.current` and `textFallingRef.current`
2. **Initial State**: Are elements hidden initially? Check `opacity` and `transform` in DevTools
3. **ScrollTrigger Setup**: Are triggers created? Check `ScrollTrigger.getAll()`
4. **Trigger Points**: Are trigger points calculated correctly? Check `trigger.start` vs `window.scrollY`
5. **Timing**: Does `initAnimations` run? Check console logs
6. **CSS Conflicts**: Are CSS styles overriding GSAP? Check computed styles in DevTools
