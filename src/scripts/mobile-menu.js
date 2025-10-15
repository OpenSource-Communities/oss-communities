document.addEventListener("DOMContentLoaded", () => {
	const mobileMenuButton = document.getElementById("mobile-menu-button")
	const mobileMenu = document.getElementById("mobile-menu")

	mobileMenuButton?.addEventListener("click", () => {
		const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true"
		mobileMenuButton.setAttribute("aria-expanded", (!isExpanded).toString())
		mobileMenu?.classList.toggle("hidden")
	})

	document.addEventListener("click", (event) => {
		if (
			!mobileMenuButton?.contains(event.target) &&
			!mobileMenu?.contains(event.target)
		) {
			mobileMenu?.classList.add("hidden")
			mobileMenuButton?.setAttribute("aria-expanded", "false")
		}
	})

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && !mobileMenu?.classList.contains("hidden")) {
			mobileMenu?.classList.add("hidden")
			mobileMenuButton?.setAttribute("aria-expanded", "false")
			mobileMenuButton?.focus()
		}
	})
})
