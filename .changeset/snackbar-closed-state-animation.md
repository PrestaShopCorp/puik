---
"@prestashopcorp/puik-theme": patch
---

fix: [Snackbar] let a snackbar that is open on its first render be closed

`.puik-snackbar-root` declared an entry animation but the theme had no rule for the
closed state, so the computed `animation-name` was still `slideIn` when a snackbar
closed.

radix-vue's `Presence` decides between unmounting and waiting for an exit animation by
comparing the animation name it recorded when the element entered the `mounted` state
with the one computed at close time, and it only records that on a transition *into*
`mounted`. A snackbar whose `open` is already `true` on its first render starts in
`mounted`, so nothing is recorded and the recorded name stays `none`; at close time
`none !== slideIn`, so `Presence` waited for an `animationend` that never fired and the
snackbar stayed in the DOM, fully visible, with `data-state="closed"`.

`.puik-snackbar-root[data-state='closed']` now has its own `slideOut` animation, which
mirrors `slideIn`. The snackbar fades out and is removed from the DOM whatever its
initial `open` value. Swipe-out animations are unaffected.
