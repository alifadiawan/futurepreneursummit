<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

<script>
    let velocity = 0;
    let isTicking = false;

    window.addEventListener('wheel', function (e) {
        e.preventDefault();
        velocity += e.deltaY * 0.2; // sensitivity multiplier
        if (!isTicking) {
            requestAnimationFrame(updateScroll);
            isTicking = true;
        }
    }, { passive: false });

    function updateScroll() {
        window.scrollBy(0, velocity);
        velocity *= 0.9; // friction (simulate momentum slowdown)

        if (Math.abs(velocity) > 0.1) {
            requestAnimationFrame(updateScroll);
        } else {
            velocity = 0;
            isTicking = false;
        }
    }
</script>



</html>