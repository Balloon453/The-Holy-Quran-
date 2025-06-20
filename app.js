// عرض سورة الفاتحة (تجربة أولية فقط)
fetch("data/quran.json")
  .then(response => response.json())
  .then(quran => {
    const surah = quran["1"]; // سورة الفاتحة
    const container = document.createElement("div");
    container.innerHTML = `<h2>${surah.name}</h2>`;

    surah.ayahs.forEach((ayah, index) => {
      const ayahElement = document.createElement("p");
      ayahElement.textContent = `${index + 1} - ${ayah}`;
      ayahElement.style.margin = "10px 0";
      container.appendChild(ayahElement);
    });

    document.body.appendChild(container);
  })
  .catch(error => {
    console.error("حدث خطأ أثناء تحميل القرآن:", error);
  });
