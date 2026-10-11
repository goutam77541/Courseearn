(function () {
  "use strict";
  const grid = document.getElementById("courseGrid");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const courses = Array.isArray(window.COURSE_EARN_COURSES) ? window.COURSE_EARN_COURSES : [];

  function safeText(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char];
    });
  }

  function validAffiliateUrl(value) {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch (_) {
      return false;
    }
  }

  function cardMarkup(course) {
    const colors = Array.isArray(course.colors) ? course.colors : ["#e6edce", "#5c7334"];
    const title = safeText(course.title || "Untitled course");
    const hasLink = validAffiliateUrl(course.affiliateUrl || "");
    const button = hasLink
      ? `<a class="buy-button" href="${safeText(course.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer">View course <span>↗</span></a>`
      : `<button class="buy-button is-demo" type="button" disabled title="Add an approved affiliate URL in courses.js">Add affiliate link to publish</button>`;
    return `
      <article class="course-card">
        <div class="course-visual" style="background:${safeText(colors[0])};color:${safeText(colors[1])}">
          <div class="visual-shape shape-a"></div><div class="visual-shape shape-b"></div>
          <span class="visual-badge">${safeText(course.badge || course.category || "COURSE")}</span>
          <div class="visual-mark">${safeText(course.mark || "C")}</div>
        </div>
        <div class="course-body">
          <div class="course-meta"><span class="course-category">${safeText(course.category || "Learning")}</span><span>${safeText(course.level || "All levels")}</span></div>
          <h3>${title}</h3>
          <p>${safeText(course.description || "")}</p>
          <div class="course-footer"><div class="provider-label">COURSE PROVIDER<strong>${safeText(course.provider || "Provider not added")}</strong></div><div class="course-price">${safeText(course.priceLabel || "Check price")}</div></div>
          ${button}
        </div>
      </article>`;
  }

  function renderCourses() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const filtered = courses.filter(function (course) {
      const text = [course.title, course.category, course.provider, course.description, course.level].join(" ").toLowerCase();
      return text.includes(query) && (category === "all" || course.category === category);
    });
    grid.innerHTML = filtered.map(cardMarkup).join("");
    emptyState.hidden = filtered.length !== 0;
  }

  searchInput.addEventListener("input", renderCourses);
  categoryFilter.addEventListener("change", renderCourses);
  document.getElementById("year").textContent = new Date().getFullYear();
  renderCourses();
})();