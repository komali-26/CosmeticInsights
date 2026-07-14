function recommend() {

    const skin = document.getElementById("skin").value;
    const output = document.getElementById("output");

    const recommendations = {
        "Dry": [
            "Hydrating Cleanser",
            "Hyaluronic Acid Serum",
            "Rich Moisturizer"
        ],
        "Oily": [
            "Gel Cleanser",
            "Niacinamide Serum",
            "Oil-Free Moisturizer"
        ],
        "Combination": [
            "Gentle Face Wash",
            "Vitamin C Serum",
            "Lightweight Moisturizer"
        ],
        "Normal": [
            "Daily Cleanser",
            "Moisturizer",
            "Sunscreen SPF 50"
        ],
        "Sensitive": [
            "Aloe Vera Gel",
            "Fragrance-Free Moisturizer",
            "Mineral Sunscreen"
        ]
    };

    if (!skin) {
        output.innerHTML = "<strong>Please select a skin type.</strong>";
        return;
    }

    const items = recommendations[skin];

    output.innerHTML = `
        <h3>Recommended Products for ${skin} Skin</h3>
        <ul style="list-style:none;padding:0;">
            ${items.map(item => `<li>✔ ${item}</li>`).join("")}
        </ul>
    `;
}