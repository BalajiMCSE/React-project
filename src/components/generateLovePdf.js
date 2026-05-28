import { jsPDF } from "jspdf";

const cleanText = (text) => {

  if (!text) return "";

  return text
    .replace(
      /[\u{1F300}-\u{1FAFF}]/gu,
      ""
    )
    .replace(
      /[^\x00-\x7F]/g,
      ""
    )
    .trim();
};

export default function generateLovePdf(
  answers
) {

  const doc = new jsPDF();

  let y = 24;

  // Background
  doc.setFillColor(255, 236, 242);

  doc.rect(
    0,
    0,
    210,
    297,
    "F"
  );

  // Title
  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setTextColor(
    255,
    64,
    129
  );

  doc.setFontSize(24);

  doc.text(
    "Our Little Love Notes",
    20,
    y
  );

  y += 18;

  answers.filter(
    item =>
      item &&
      typeof item.question === "string" &&
      typeof item.answer === "string"
  ).forEach((item, i) => {

    // Sticky note card
    doc.setFillColor(
      255,
      248,
      250
    );

    doc.roundedRect(
      15,
      y - 6,
      180,
      34,
      8,
      8,
      "F"
    );

    // Question
    doc.setTextColor(
      214,
      51,
      108
    );

    doc.setFontSize(12);

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.text(
      `Question ${i + 1}`,
      22,
      y
    );

    y += 8;

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setTextColor(
      120,
      60,
      90
    );

    const splitQuestion =
      doc.splitTextToSize(
        cleanText(item.question),
        160
      );

    doc.text(
      splitQuestion,
      22,
      y
    );

    y +=
      splitQuestion.length * 7;

    // Answer
    doc.setTextColor(
      255,
      64,
      129
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.text(
      "Answer:",
      22,
      y
    );

    y += 8;

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setTextColor(
      90,
      40,
      70
    );

    const splitAnswer =
      doc.splitTextToSize(
        cleanText(String(item.answer)),
        150
      );

    doc.text(
      splitAnswer,
      22,
      y
    );

    y +=
      splitAnswer.length * 8 +
      16;

    // New page
    if (y > 240) {

      doc.addPage();

      doc.setFillColor(
        255,
        236,
        242
      );

      doc.rect(
        0,
        0,
        210,
        297,
        "F"
      );

      y = 24;
    }

  });

  // Ending note
  doc.setFontSize(18);

  doc.setTextColor(
    255,
    64,
    129
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.text(
    "Forever stuck with me now.",
    20,
    y + 10
  );

  doc.save(
    "Our-Love-Story.pdf"
  );
}