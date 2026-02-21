// questions.js
const quizDatabase = {
  // ----------------------------------------
  // 1. fds Questions (50)
  // ----------------------------------------
  fds: [
    {
      "question": "What is the definition of a Reference Electrode?",
      "options": [
        {"text": "An electrode with a potential that changes with the solution's concentration.", "isCorrect": false},
        {"text": "An electrode that has a stable and reproducible potential.", "isCorrect": true},
        {"text": "An electrode made only of glass and platinum.", "isCorrect": false},
        {"text": "An electrode that can only be used for oxidation reactions.", "isCorrect": false}
      ]
    },
    {
      "question": "In a Calomel Electrode, what is the layer directly above the liquid mercury?",
      "options": [
        {"text": "A paste of Hg and Hg<sub>2</sub>Cl<sub>2</sub> (Calomel)", "isCorrect": true},
        {"text": "A 0.1M HCl solution", "isCorrect": false},
        {"text": "A silver chloride (AgCl) coating", "isCorrect": false},
        {"text": "A porous graphite rod", "isCorrect": false}
      ]
    },
    {
      "question": "What is the main demerit of using a Calomel Electrode?",
      "options": [
        {"text": "It is not portable or compact.", "isCorrect": false},
        {"text": "It cannot be used above 50°C as Hg<sub>2</sub>Cl<sub>2</sub> starts decomposing.", "isCorrect": true},
        {"text": "It gives inaccurate results in acidic solutions.", "isCorrect": false},
        {"text": "It must be stored in the dark.", "isCorrect": false}
      ]
    },
    {
      "question": "If a Calomel Electrode acts as a cathode (reduction), what is the correct reaction?",
      "options": [
        {"text": "2Hg + 2Cl<sup>-</sup> &rarr; Hg<sub>2</sub>Cl<sub>2</sub> + 2e<sup>-</sup>", "isCorrect": false},
        {"text": "Hg<sub>2</sub>Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Hg + 2Cl<sup>-</sup>", "isCorrect": true},
        {"text": "H<sup>+</sup> + e<sup>-</sup> &rarr; &frac12;H<sub>2</sub>", "isCorrect": false},
        {"text": "Ag + Cl<sup>-</sup> &rarr; AgCl + e<sup>-</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "What is the key component at the bottom of a Glass Electrode?",
      "options": [
        {"text": "A platinum wire", "isCorrect": false},
        {"text": "A calomel paste", "isCorrect": false},
        {"text": "A thin-walled glass membrane bulb", "isCorrect": true},
        {"text": "A porous asbestos plug", "isCorrect": false}
      ]
    },
    {
      "question": "The potential of a Glass Electrode (E<sub>G</sub>) is directly proportional to the solution's...",
      "options": [
        {"text": "Temperature", "isCorrect": false},
        {"text": "Conductivity", "isCorrect": false},
        {"text": "Volume", "isCorrect": false},
        {"text": "pH", "isCorrect": true}
      ]
    },
    {
      "question": "Which of the following is an advantage of a Glass Electrode?",
      "options": [
        {"text": "It is portable and compact.", "isCorrect": true},
        {"text": "It works well at temperatures above 50°C.", "isCorrect": false},
        {"text": "It is very cheap to manufacture.", "isCorrect": false},
        {"text": "It does not require a salt bridge.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a Conductometric Titration?",
      "options": [
        {"text": "A titration where the end point is noted by a color change.", "isCorrect": false},
        {"text": "A titration where the end point is noted by measuring conductance.", "isCorrect": true},
        {"text": "A titration that measures the pH of the solution.", "isCorrect": false},
        {"text": "A titration that only works with colored solutions.", "isCorrect": false}
      ]
    },
    {
      "question": "Conductance (C) is defined as the reciprocal of...",
      "options": [
        {"text": "Resistance (R)", "isCorrect": true},
        {"text": "Voltage (V)", "isCorrect": false},
        {"text": "Current (I)", "isCorrect": false},
        {"text": "Length (L)", "isCorrect": false}
      ]
    },
    {
      "question": "What is the unit of Conductance?",
      "options": [
        {"text": "Ohm", "isCorrect": false},
        {"text": "Ohm-cm", "isCorrect": false},
        {"text": "Ohm<sup>-1</sup> (or Siemens)", "isCorrect": true},
        {"text": "cm<sup>-1</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "What is the unit of the Cell Constant (L/A)?",
      "options": [
        {"text": "cm<sup>-1</sup>", "isCorrect": true},
        {"text": "cm<sup>2</sup>", "isCorrect": false},
        {"text": "cm", "isCorrect": false},
        {"text": "Ohm-cm", "isCorrect": false}
      ]
    },
    {
      "question": "In the titration of a strong acid (HCl) with a strong base (NaOH), why does conductance decrease before the equivalence point?",
      "options": [
        {"text": "The total number of ions decreases.", "isCorrect": false},
        {"text": "The highly mobile H<sup>+</sup> ions are replaced by less mobile Na<sup>+</sup> ions.", "isCorrect": true},
        {"text": "The solution becomes diluted.", "isCorrect": false},
        {"text": "The salt (NaCl) formed is a non-conductor.", "isCorrect": false}
      ]
    },
    {
      "question": "In the titration of a strong acid (HCl) with a strong base (NaOH), why does conductance increase *after* the equivalence point?",
      "options": [
        {"text": "The concentration of the salt (NaCl) increases.", "isCorrect": false},
        {"text": "The temperature of the solution increases.", "isCorrect": false},
        {"text": "Excess, highly mobile OH<sup>-</sup> ions are added from the strong base.", "isCorrect": true},
        {"text": "Water is formed, which increases conductance.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the wavelength range for UV (Ultraviolet) radiation?",
      "options": [
        {"text": "200 - 380 nm", "isCorrect": true},
        {"text": "380 - 780 nm", "isCorrect": false},
        {"text": "0.1 - 200 nm", "isCorrect": false},
        {"text": "780 - 1000 nm", "isCorrect": false}
      ]
    },
    {
      "question": "What is the wavelength range for Visible radiation?",
      "options": [
        {"text": "200 - 380 nm", "isCorrect": false},
        {"text": "380 - 780 nm", "isCorrect": true},
        {"text": "10 - 200 nm", "isCorrect": false},
        {"text": "100 - 300 nm", "isCorrect": false}
      ]
    },
    {
      "question": "What happens to a molecule when it absorbs UV-Visible radiation?",
      "options": [
        {"text": "It causes molecular vibration.", "isCorrect": false},
        {"text": "It causes molecular rotation.", "isCorrect": false},
        {"text": "It causes excitation of electrons to a higher energy level.", "isCorrect": true},
        {"text": "It causes the nucleus to spin.", "isCorrect": false}
      ]
    },
    {
      "question": "In a UV-Visible spectrophotometer, what is the function of the radiation source?",
      "options": [
        {"text": "To select a single wavelength of light.", "isCorrect": false},
        {"text": "To generate a high-intensity beam of polychromatic radiation.", "isCorrect": true},
        {"text": "To convert light energy into electrical current.", "isCorrect": false},
        {"text": "To hold the sample.", "isCorrect": false}
      ]
    },
    {
      "question": "What radiation source is most commonly used for the *Visible* region?",
      "options": [
        {"text": "A Tungsten filament lamp", "isCorrect": true},
        {"text": "A Deuterium lamp", "isCorrect": false},
        {"text": "A Nernst glower", "isCorrect": false},
        {"text": "A Quartz lamp", "isCorrect": false}
      ]
    },
    {
      "question": "What radiation source is commonly used for the *UV* region?",
      "options": [
        {"text": "A Tungsten filament lamp", "isCorrect": false},
        {"text": "A Deuterium lamp", "isCorrect": true},
        {"text": "A glass filter", "isCorrect": false},
        {"text": "A Photomultiplier tube", "isCorrect": false}
      ]
    },
    {
      "question": "What is the function of a Monochromator?",
      "options": [
        {"text": "To hold the sample solution.", "isCorrect": false},
        {"text": "To convert polychromatic radiation into monochromatic radiation.", "isCorrect": true},
        {"text": "To amplify the signal from the detector.", "isCorrect": false},
        {"text": "To generate the initial beam of light.", "isCorrect": false}
      ]
    },
    {
      "question": "Sample holders (cuvettes) for UV-Visible spectroscopy are typically made of what material?",
      "options": [
        {"text": "Plastic", "isCorrect": false},
        {"text": "Pyrex glass", "isCorrect": false},
        {"text": "Quartz or Fused Silica", "isCorrect": true},
        {"text": "Aluminum", "isCorrect": false}
      ]
    },
    {
      "question": "What is the function of the Detector in a spectrophotometer?",
      "options": [
        {"text": "To convert light energy (transmitted light) into an electrical signal.", "isCorrect": true},
        {"text": "To select a specific wavelength of light.", "isCorrect": false},
        {"text": "To record the output on a graph.", "isCorrect": false},
        {"text": "To filter out stray light.", "isCorrect": false}
      ]
    },
    {
      "question": "Which of the following is an application of UV-Visible spectroscopy?",
      "options": [
        {"text": "Detection of impurities", "isCorrect": true},
        {"text": "Separation of proteins", "isCorrect": false},
        {"text": "Measurement of pH", "isCorrect": false},
        {"text": "Synthesis of organic compounds", "isCorrect": false}
      ]
    },
    {
      "question": "How can UV-Visible spectroscopy distinguish between conjugated and non-conjugated compounds?",
      "options": [
        {"text": "Conjugated systems absorb at shorter wavelengths.", "isCorrect": false},
        {"text": "Conjugated systems absorb at longer wavelengths.", "isCorrect": true},
        {"text": "Non-conjugated systems do not absorb light.", "isCorrect": false},
        {"text": "Only non-conjugated systems are visible to the detector.", "isCorrect": false}
      ]
    },
    {
      "question": "Which electronic transition generally requires the *most* energy?",
      "options": [
        {"text": "n → &pi;<sup>*</sup>", "isCorrect": false},
        {"text": "&pi; → &pi;<sup>*</sup>", "isCorrect": false},
        {"text": "&sigma; → &sigma;<sup>*</sup>", "isCorrect": true},
        {"text": "n → &sigma;<sup>*</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "Which electronic transition generally requires the *least* energy?",
      "options": [
        {"text": "n → &pi;<sup>*</sup>", "isCorrect": true},
        {"text": "&pi; → &pi;<sup>*</sup>", "isCorrect": false},
        {"text": "&sigma; → &sigma;<sup>*</sup>", "isCorrect": false},
        {"text": "n → &sigma;<sup>*</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "A &sigma; &rarr; &sigma;<sup>*</sup> transition is typical for which type of compound?",
      "options": [
        {"text": "Alkenes (C=C)", "isCorrect": false},
        {"text": "Saturated hydrocarbons (e.g., Methane, CH<sub>4</sub>)", "isCorrect": true},
        {"text": "Alcohols (-OH)", "isCorrect": false},
        {"text": "Carbonyl compounds (C=O)", "isCorrect": false}
      ]
    },
    {
      "question": "A &pi; &rarr; &pi;<sup>*</sup> transition is characteristic of compounds containing...",
      "options": [
        {"text": "Single bonds only", "isCorrect": false},
        {"text": "Lone pairs of electrons", "isCorrect": false},
        {"text": "Unsaturated groups (e.g., alkenes, alkynes)", "isCorrect": true},
        {"text": "Only sigma bonds", "isCorrect": false}
      ]
    },
    {
      "question": "What is a Chromophore?",
      "options": [
        {"text": "A saturated group with a lone pair of electrons.", "isCorrect": false},
        {"text": "A covalently unsaturated group (like C=C, C=O) responsible for absorption.", "isCorrect": true},
        {"text": "The solvent used in the spectrophotometer.", "isCorrect": false},
        {"text": "A shift to a longer wavelength.", "isCorrect": false}
      ]
    },
    {
      "question": "What is an Auxochrome?",
      "options": [
        {"text": "A group (like -OH, -NH<sub>2</sub>) with lone pairs that, when attached to a chromophore, changes the absorption.", "isCorrect": true},
        {"text": "Any group that contains a double bond.", "isCorrect": false},
        {"text": "The part of the detector that measures light.", "isCorrect": false},
        {"text": "A shift to a shorter wavelength.", "isCorrect": false}
      ]
    },
    {
      "question": "A 'Bathochromic Shift' is also known as a...",
      "options": [
        {"text": "Red Shift (to a longer wavelength)", "isCorrect": true},
        {"text": "Blue Shift (to a shorter wavelength)", "isCorrect": false},
        {"text": "Hyperchromic Shift (to higher intensity)", "isCorrect": false},
        {"text": "Hypochromic Shift (to lower intensity)", "isCorrect": false}
      ]
    },
    {
      "question": "A 'Hypsochromic Shift' is also known as a...",
      "options": [
        {"text": "Red Shift (to a longer wavelength)", "isCorrect": false},
        {"text": "Blue Shift (to a shorter wavelength)", "isCorrect": true},
        {"text": "Hyperchromic Shift (to higher intensity)", "isCorrect": false},
        {"text": "Hypochromic Shift (to lower intensity)", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Hyperchromic Shift'?",
      "options": [
        {"text": "A shift to a longer wavelength", "isCorrect": false},
        {"text": "A shift to a shorter wavelength", "isCorrect": false},
        {"text": "An increase in absorption intensity", "isCorrect": true},
        {"text": "A decrease in absorption intensity", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Hypochromic Shift'?",
      "options": [
        {"text": "A shift to a longer wavelength", "isCorrect": false},
        {"text": "A shift to a shorter wavelength", "isCorrect": false},
        {"text": "An increase in absorption intensity", "isCorrect": false},
        {"text": "A decrease in absorption intensity", "isCorrect": true}
      ]
    },
    {
      "question": "Lambert's Law states that the rate of decrease in light intensity is proportional to the...",
      "options": [
        {"text": "Concentration of the solution", "isCorrect": false},
        {"text": "Path length of the solution", "isCorrect": true},
        {"text": "Temperature of the solution", "isCorrect": false},
        {"text": "Wavelength of the light", "isCorrect": false}
      ]
    },
    {
      "question": "Beer's Law states that the rate of decrease in light intensity is proportional to the...",
      "options": [
        {"text": "Concentration of the solution", "isCorrect": true},
        {"text": "Path length of the solution", "isCorrect": false},
        {"text": "Density of the solution", "isCorrect": false},
        {"text": "Volume of the cuvette", "isCorrect": false}
      ]
    },
    {
      "question": "What is a battery?",
      "options": [
        {"text": "A device that converts electrical energy into chemical energy.", "isCorrect": false},
        {"text": "A device that converts chemical energy into electrical energy.", "isCorrect": true},
        {"text": "A device that only stores electrical charge, like a capacitor.", "isCorrect": false},
        {"text": "A device that measures the pH of a solution.", "isCorrect": false}
      ]
    },
    {
      "question": "What is 'Discharging' in a battery?",
      "options": [
        {"text": "Reversing the cell reaction by passing an external current.", "isCorrect": false},
        {"text": "Converting inactive material back into active material.", "isCorrect": false},
        {"text": "Converting active material into inactive material during a redox reaction.", "isCorrect": true},
        {"text": "The battery leaking its electrolyte.", "isCorrect": false}
      ]
    },
    {
      "question": "What is 'Charging' in a battery?",
      "options": [
        {"text": "The process of converting inactive material back into active material.", "isCorrect": true},
        {"text": "The battery losing charge even when not in use.", "isCorrect": false},
        {"text": "The battery generating its maximum voltage.", "isCorrect": false},
        {"text": "The battery's redox reaction running in the forward direction.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the 'Cycle Life' of a battery?",
      "options": [
        {"text": "The total time the battery can be stored.", "isCorrect": false},
        {"text": "The number of times a rechargeable battery can be discharged and recharged.", "isCorrect": true},
        {"text": "The total energy the battery can hold per unit weight.", "isCorrect": false},
        {"text": "The rate of self-discharge.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the 'Shelf Life' of a battery?",
      "options": [
        {"text": "The time the battery can be stored without significant loss of charge.", "isCorrect": true},
        {"text": "The number of recharge cycles.", "isCorrect": false},
        {"text": "The battery's voltage.", "isCorrect": false},
        {"text": "The battery's power density.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the 'Energy Density' of a battery?",
      "options": [
        {"text": "The total voltage of the cell.", "isCorrect": false},
        {"text": "The energy available per unit weight of the cell.", "isCorrect": true},
        {"text": "The number of recharge cycles.", "isCorrect": false},
        {"text": "The time it takes to charge the battery.", "isCorrect": false}
      ]
    },
    {
      "question": "In a Nickel-Metal Hydride (Ni-MH) battery, what is the anode material?",
      "options": [
        {"text": "Nickel oxyhydroxide (NiO(OH))", "isCorrect": false},
        {"text": "Metal Hydrides (MH or MH<sub>2</sub>)", "isCorrect": true},
        {"text": "Aqueous KOH", "isCorrect": false},
        {"text": "Lithium metal", "isCorrect": false}
      ]
    },
    {
      "question": "In a Nickel-Metal Hydride (Ni-MH) battery, what is the cathode material?",
      "options": [
        {"text": "Nickel oxyhydroxide (NiO(OH))", "isCorrect": true},
        {"text": "Metal Hydrides (MH or MH<sub>2</sub>)", "isCorrect": false},
        {"text": "Aqueous KOH", "isCorrect": false},
        {"text": "Manganese Dioxide (MnO<sub>2</sub>)", "isCorrect": false}
      ]
    },
    {
      "question": "What is the electrolyte used in a Ni-MH battery?",
      "options": [
        {"text": "0.1M HCl", "isCorrect": false},
        {"text": "Lithium salt in an organic solvent", "isCorrect": false},
        {"text": "Aqueous Potassium Hydroxide (KOH)", "isCorrect": true},
        {"text": "Pure water", "isCorrect": false}
      ]
    },
    {
      "question": "In a Lithium-Manganese Dioxide (Li-MnO<sub>2</sub>) battery, what is the anode material?",
      "options": [
        {"text": "Lithium metal", "isCorrect": true},
        {"text": "Manganese Dioxide (MnO<sub>2</sub>)", "isCorrect": false},
        {"text": "Graphite", "isCorrect": false},
        {"text": "Nickel", "isCorrect": false}
      ]
    },
    {
      "question": "What is a major advantage of Lithium batteries?",
      "options": [
        {"text": "They are the least expensive batteries to produce.", "isCorrect": false},
        {"text": "They are lightweight and have a high energy density.", "isCorrect": true},
        {"text": "They use a safe, water-based electrolyte.", "isCorrect": false},
        {"text": "They have a very short shelf life.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a Fuel Cell?",
      "options": [
        {"text": "A galvanic cell where chemical energy of a fuel is directly converted to electrical energy.", "isCorrect": true},
        {"text": "A rechargeable battery that uses lithium.", "isCorrect": false},
        {"text": "A device that burns fuel to create steam and turn a turbine.", "isCorrect": false},
        {"text": "A type of reference electrode.", "isCorrect": false}
      ]
    },
    {
      "question": "In an H<sub>2</sub>-O<sub>2</sub> fuel cell, what is the fuel?",
      "options": [
        {"text": "Potassium Hydroxide (KOH)", "isCorrect": false},
        {"text": "Platinum", "isCorrect": false},
        {"text": "Hydrogen (H<sub>2</sub>)", "isCorrect": true},
        {"text": "Water (H<sub>2</sub>O)", "isCorrect": false}
      ]
    },
    {
      "question": "What is the overall net reaction in an H<sub>2</sub>-O<sub>2</sub> fuel cell?",
      "options": [
        {"text": "O<sub>2(g)</sub> + 2H<sub>2</sub>O + 4e<sup>-</sup> &rarr; 4OH<sup>-</sup>", "isCorrect": false},
        {"text": "2H<sub>2(g)</sub> + 4OH<sup>-</sup> &rarr; 4H<sub>2</sub>O + 4e<sup>-</sup>", "isCorrect": false},
        {"text": "2H<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2H<sub>2</sub>O", "isCorrect": true},
        {"text": "Hg<sub>2</sub>Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Hg + 2Cl<sup>-</sup>", "isCorrect": false}
      ]
    }
  ],

  // ----------------------------------------
  // 2. OOPS (Python) Questions (50)
  // ----------------------------------------
  oop: [
    {
      "question": "How do you create an empty list in Python?",
      "options": [
        {"text": "my_list = {}", "isCorrect": false},
        {"text": "my_list = []", "isCorrect": true},
        {"text": "my_list = ()", "isCorrect": false},
        {"text": "my_list = list.empty()", "isCorrect": false}
      ]
    },
    {
      "question": "What is the primary characteristic of a Python list?",
      "options": [
        {"text": "They are immutable (cannot be changed).", "isCorrect": false},
        {"text": "They are changeable (mutable) and allow duplicate values.", "isCorrect": true},
        {"text": "They do not allow duplicate values.", "isCorrect": false},
        {"text": "They must store items of the same data type.", "isCorrect": false}
      ]
    },
    {
      "question": "Which method adds an element to the *end* of a list?",
      "options": [
        {"text": "my_list.insert(0, 'x')", "isCorrect": false},
        {"text": "my_list.add('x')", "isCorrect": false},
        {"text": "my_list.append('x')", "isCorrect": true},
        {"text": "my_list.push('x')", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of this code: <code>my_list = [1, 2, 3]</code><br><code>my_list.insert(1, 'new')</code><br><code>print(my_list)</code>",
      "options": [
        {"text": "[1, 2, 'new']", "isCorrect": false},
        {"text": "[1, 'new', 2, 3]", "isCorrect": true},
        {"text": "['new', 1, 2, 3]", "isCorrect": false},
        {"text": "[1, 2, 3, 'new']", "isCorrect": false}
      ]
    },
    {
      "question": "How do you remove the item '30' from this list: <code>my_list = [10, 20, 30, 40]</code>",
      "options": [
        {"text": "my_list.pop(30)", "isCorrect": false},
        {"text": "my_list.delete(30)", "isCorrect": false},
        {"text": "my_list.remove(30)", "isCorrect": true},
        {"text": "my_list.pop(2)", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of this code: <code>my_list = [10, 20, 30, 40]</code><br><code>my_list.pop(1)</code><br><code>print(my_list)</code>",
      "options": [
        {"text": "[10, 30, 40]", "isCorrect": true},
        {"text": "[20, 30, 40]", "isCorrect": false},
        {"text": "[10, 20, 40]", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the key difference between <code>my_list.remove(x)</code> and <code>my_list.pop(i)</code>?",
      "options": [
        {"text": "<code>remove</code> uses a value, <code>pop</code> uses an index.", "isCorrect": true},
        {"text": "<code>remove</code> uses an index, <code>pop</code> uses a value.", "isCorrect": false},
        {"text": "<code>remove</code> adds an item, <code>pop</code> removes one.", "isCorrect": false},
        {"text": "There is no difference.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_list = [3, 8, 1, 6]</code><br><code>print(my_list.index(1))</code>",
      "options": [
        {"text": "3", "isCorrect": false},
        {"text": "8", "isCorrect": false},
        {"text": "2", "isCorrect": true},
        {"text": "1", "isCorrect": false}
      ]
    },
    {
      "question": "What does the <code>my_list.sort()</code> method do?",
      "options": [
        {"text": "Sorts the list in descending order by default.", "isCorrect": false},
        {"text": "Returns a new, sorted copy of the list.", "isCorrect": false},
        {"text": "Sorts the list in ascending order *in-place*.", "isCorrect": true},
        {"text": "Reverses the order of the list.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>list1 = [1, 2]</code><br><code>list2 = [3, 4]</code><br><code>list1.extend(list2)</code><br><code>print(list1)</code>",
      "options": [
        {"text": "[[1, 2], [3, 4]]", "isCorrect": false},
        {"text": "[1, 2, 3, 4]", "isCorrect": true},
        {"text": "[1, 2, [3, 4]]", "isCorrect": false},
        {"text": "[1, 3, 4]", "isCorrect": false}
      ]
    },
    {
      "question": "What does the <code>len()</code> function do?",
      "options": [
        {"text": "Finds the largest number in a list.", "isCorrect": false},
        {"text": "Returns the number of items in an object.", "isCorrect": true},
        {"text": "Calculates the length of the variable name.", "isCorrect": false},
        {"text": "Sorts the list by length.", "isCorrect": false}
      ]
    },
    {
      "question": "In Python, list indices start at what number?",
      "options": [
        {"text": "1", "isCorrect": false},
        {"text": "0", "isCorrect": true},
        {"text": "-1", "isCorrect": false},
        {"text": "It depends on the list size.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_list = ['p', 'r', 'o', 'b', 'e']</code><br><code>print(my_list[-1])</code>",
      "options": [
        {"text": "'p'", "isCorrect": false},
        {"text": "'e'", "isCorrect": true},
        {"text": "An error will occur.", "isCorrect": false},
        {"text": "'b'", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_list = ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R']</code><br><code>print(my_list[2:5])</code>",
      "options": [
        {"text": "['M', 'P', 'U']", "isCorrect": true},
        {"text": "['O', 'M', 'P']", "isCorrect": false},
        {"text": "['M', 'P', 'U', 'T']", "isCorrect": false},
        {"text": "['C', 'O', 'M']", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_list = ['C', 'O', 'M', 'P', 'U']</code><br><code>print(my_list[:3])</code>",
      "options": [
        {"text": "['C', 'O', 'M']", "isCorrect": true},
        {"text": "['P', 'U']", "isCorrect": false},
        {"text": "['O', 'M', 'P']", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'nested list'?",
      "options": [
        {"text": "A list that cannot be changed.", "isCorrect": false},
        {"text": "A list that has another list as an item.", "isCorrect": true},
        {"text": "A list that only contains strings.", "isCorrect": false},
        {"text": "A list that has been sorted.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the main difference between a Python list and a tuple?",
      "options": [
        {"text": "Lists are immutable, tuples are mutable.", "isCorrect": false},
        {"text": "Lists are mutable, tuples are immutable (unchangeable).", "isCorrect": true},
        {"text": "Lists use <code>()</code>, tuples use <code>[]</code>.", "isCorrect": false},
        {"text": "Lists cannot have duplicate values, tuples can.", "isCorrect": false}
      ]
    },
    {
      "question": "How do you create a tuple in Python?",
      "options": [
        {"text": "By placing items inside square brackets <code>[]</code>.", "isCorrect": false},
        {"text": "By placing items inside curly braces <code>{}</code>.", "isCorrect": false},
        {"text": "By placing items inside parentheses <code>()</code>, separated by commas.", "isCorrect": true},
        {"text": "By using the <code>tuple.new()</code> method.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_tuple = (1, 'Hello', 3.4)</code><br><code>print(my_tuple[1])</code>",
      "options": [
        {"text": "1", "isCorrect": false},
        {"text": "'Hello'", "isCorrect": true},
        {"text": "3.4", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "What happens if you try this code: <code>my_tuple = (1, 2, 3)</code><br><code>my_tuple[0] = 5</code>",
      "options": [
        {"text": "The tuple becomes <code>(5, 2, 3)</code>.", "isCorrect": false},
        {"text": "It raises a <code>TypeError</code> because tuples are immutable.", "isCorrect": true},
        {"text": "The tuple becomes <code>(1, 2, 3, 5)</code>.", "isCorrect": false},
        {"text": "It raises an <code>IndexError</code>.", "isCorrect": false}
      ]
    },
    {
      "question": "How do you correctly define a tuple with only *one* element, <code>'hello'</code>?",
      "options": [
        {"text": "t = ('hello')", "isCorrect": false},
        {"text": "t = 'hello',", "isCorrect": false},
        {"text": "t = ('hello',)", "isCorrect": true},
        {"text": "t = {'hello'}", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>print((1, 2, 3) + (4, 5, 6))</code>",
      "options": [
        {"text": "(1, 2, 3, 4, 5, 6)", "isCorrect": true},
        {"text": "(5, 7, 9)", "isCorrect": false},
        {"text": "((1, 2, 3), (4, 5, 6))", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>print(('Repeat',) * 3)</code>",
      "options": [
        {"text": "('RepeatRepeatRepeat',)", "isCorrect": false},
        {"text": "('Repeat', 'Repeat', 'Repeat')", "isCorrect": true},
        {"text": "An error will occur.", "isCorrect": false},
        {"text": "('Repeat', 3)", "isCorrect": false}
      ]
    },
    {
      "question": "What is 'Tuple Assignment'?",
      "options": [
        {"text": "Assigning a tuple as a key in a dictionary.", "isCorrect": false},
        {"text": "Assigning values from a tuple to a tuple of variables.", "isCorrect": true},
        {"text": "A function that creates a tuple.", "isCorrect": false},
        {"text": "Changing a value inside a tuple.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_tuple = ('a', 'p', 'p', 'l', 'e')</code><br><code>print('p' in my_tuple)</code>",
      "options": [
        {"text": "True", "isCorrect": true},
        {"text": "False", "isCorrect": false},
        {"text": "1", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "How do you delete an entire tuple named <code>my_tuple</code>?",
      "options": [
        {"text": "my_tuple.clear()", "isCorrect": false},
        {"text": "my_tuple.remove_all()", "isCorrect": false},
        {"text": "del my_tuple", "isCorrect": true},
        {"text": "You cannot delete a tuple.", "isCorrect": false}
      ]
    },
    {
      "question": "Which built-in function returns a tuple containing the quotient and remainder of a division?",
      "options": [
        {"text": "divmod()", "isCorrect": true},
        {"text": "divide()", "isCorrect": false},
        {"text": "modulus()", "isCorrect": false},
        {"text": "quotient()", "isCorrect": false}
      ]
    },
    {
      "question": "What is a Python Set?",
      "options": [
        {"text": "An ordered collection that allows duplicates.", "isCorrect": false},
        {"text": "An unordered collection that has no duplicate elements.", "isCorrect": true},
        {"text": "A key-value pair collection.", "isCorrect": false},
        {"text": "An immutable (unchangeable) list.", "isCorrect": false}
      ]
    },
    {
      "question": "How do you create an empty set?",
      "options": [
        {"text": "my_set = {}", "isCorrect": false},
        {"text": "my_set = set()", "isCorrect": true},
        {"text": "my_set = ()", "isCorrect": false},
        {"text": "my_set = []", "isCorrect": false}
      ]
    },
    {
      "question": "Why does <code>my_set = {}</code> not create an empty set?",
      "options": [
        {"text": "It creates an empty tuple.", "isCorrect": false},
        {"text": "It creates an empty dictionary.", "isCorrect": true},
        {"text": "It creates an empty list.", "isCorrect": false},
        {"text": "It is invalid syntax.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_set = {11, 21, 11, 4, 5, 4}</code><br><code>print(my_set)</code>",
      "options": [
        {"text": "{11, 21, 11, 4, 5, 4}", "isCorrect": false},
        {"text": "The output could be {4, 5, 11, 21} (or any order).", "isCorrect": true},
        {"text": "[4, 5, 11, 21]", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "What does it mean for a set to be 'unordered'?",
      "options": [
        {"text": "The items do not have a defined order and cannot be accessed by index.", "isCorrect": true},
        {"text": "The items are sorted in descending order.", "isCorrect": false},
        {"text": "You must sort the set before using it.", "isCorrect": false},
        {"text": "It cannot store numbers.", "isCorrect": false}
      ]
    },
    {
      "question": "How are items stored in a Python dictionary?",
      "options": [
        {"text": "As an ordered sequence of values.", "isCorrect": false},
        {"text": "As key-value pairs.", "isCorrect": true},
        {"text": "As an unordered set of values.", "isCorrect": false},
        {"text": "As an immutable list of items.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a valid dictionary key?",
      "options": [
        {"text": "A list", "isCorrect": false},
        {"text": "A string or a number (immutable types).", "isCorrect": true},
        {"text": "Another dictionary", "isCorrect": false},
        {"text": "A set", "isCorrect": false}
      ]
    },
    {
      "question": "How do you access the value associated with the key 'age' in <code>my_dict</code>?",
      "options": [
        {"text": "my_dict.age", "isCorrect": false},
        {"text": "my_dict['age']", "isCorrect": true},
        {"text": "my_dict(age)", "isCorrect": false},
        {"text": "my_dict[1]", "isCorrect": false}
      ]
    },
    {
      "question": "What happens if you try to access a key that doesn't exist using square brackets <code>[]</code>?",
      "options": [
        {"text": "It returns <code>None</code>.", "isCorrect": false},
        {"text": "It returns <code>0</code>.", "isCorrect": false},
        {"text": "It raises a <code>KeyError</code>.", "isCorrect": true},
        {"text": "It adds the key to the dictionary.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the safer way to get a value for a key that might not exist, which returns <code>None</code> instead of an error?",
      "options": [
        {"text": "Using <code>my_dict.get('key')</code>", "isCorrect": true},
        {"text": "Using <code>my_dict.find('key')</code>", "isCorrect": false},
        {"text": "Using <code>my_dict.safe_get('key')</code>", "isCorrect": false},
        {"text": "Using <code>my_dict['key']</code> in a <code>try</code> block.", "isCorrect": false}
      ]
    },
    {
      "question": "What does this code do: <code>my_dict = {'name': 'Jack', 'age': 26}</code><br><code>my_dict['age'] = 27</code>",
      "options": [
        {"text": "It adds a new key 'age' with value 27.", "isCorrect": false},
        {"text": "It raises an error because 'age' already exists.", "isCorrect": false},
        {"text": "It updates the existing value for the key 'age' to 27.", "isCorrect": true},
        {"text": "It creates a new dictionary.", "isCorrect": false}
      ]
    },
    {
      "question": "How do you add a new key-value pair <code>'address': 'Downtown'</code> to <code>my_dict</code>?",
      "options": [
        {"text": "my_dict.append('address', 'Downtown')", "isCorrect": false},
        {"text": "my_dict['address'] = 'Downtown'", "isCorrect": true},
        {"text": "my_dict.add('address', 'Downtown')", "isCorrect": false},
        {"text": "my_dict.insert('address', 'Downtown')", "isCorrect": false}
      ]
    },
    {
      "question": "Which method removes an item with the provided key and *returns its value*?",
      "options": [
        {"text": "del my_dict['key']", "isCorrect": false},
        {"text": "my_dict.remove('key')", "isCorrect": false},
        {"text": "my_dict.pop('key')", "isCorrect": true},
        {"text": "my_dict.clear('key')", "isCorrect": false}
      ]
    },
    {
      "question": "Which method removes *all* items from a dictionary?",
      "options": [
        {"text": "del my_dict", "isCorrect": false},
        {"text": "my_dict.pop_all()", "isCorrect": false},
        {"text": "my_dict.clear()", "isCorrect": true},
        {"text": "my_dict.remove_all()", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_dict = {'b': 2, 'a': 1, 'c': 3}</code><br><code>print(sorted(my_dict.keys()))</code>",
      "options": [
        {"text": "['b', 'a', 'c']", "isCorrect": false},
        {"text": "['a', 'b', 'c']", "isCorrect": true},
        {"text": "[1, 2, 3]", "isCorrect": false},
        {"text": "[('b', 2), ('a', 1), ('c', 3)]", "isCorrect": false}
      ]
    },
    {
      "question": "How do you iterate through both the keys and values of a dictionary?",
      "options": [
        {"text": "for k, v in my_dict.items():", "isCorrect": true},
        {"text": "for k in my_dict.keys():", "isCorrect": false},
        {"text": "for v in my_dict.values():", "isCorrect": false},
        {"text": "for i in my_dict:", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'nested dictionary'?",
      "options": [
        {"text": "A dictionary with no items.", "isCorrect": false},
        {"text": "A dictionary that cannot be changed.", "isCorrect": false},
        {"text": "A dictionary that is stored inside another dictionary.", "isCorrect": true},
        {"text": "A dictionary that uses lists as keys.", "isCorrect": false}
      ]
    },
    {
      "question": "Which method returns a *list* of all values in a dictionary?",
      "options": [
        {"text": "my_dict.keys()", "isCorrect": false},
        {"text": "my_dict.values()", "isCorrect": true},
        {"text": "my_dict.items()", "isCorrect": false},
        {"text": "my_dict.get_values()", "isCorrect": false}
      ]
    },
    {
      "question": "Which method returns a list of tuples, where each tuple is a (key, value) pair?",
      "options": [
        {"text": "my_dict.keys()", "isCorrect": false},
        {"text": "my_dict.values()", "isCorrect": false},
        {"text": "my_dict.items()", "isCorrect": true},
        {"text": "my_dict.pairs()", "isCorrect": false}
      ]
    },
    {
      "question": "What is a key difference between a list and a dictionary?",
      "options": [
        {"text": "Lists are ordered and accessed by a numeric index, while dictionaries are unordered (in older Python) key-value maps.", "isCorrect": true},
        {"text": "Lists are for numbers, dictionaries are for strings.", "isCorrect": false},
        {"text": "Lists are mutable, dictionaries are immutable.", "isCorrect": false},
        {"text": "Lists can have duplicates, dictionaries cannot.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_dict = {1: 'a', 2: 'b'}</code><br><code>print(1 in my_dict)</code>",
      "options": [
        {"text": "True", "isCorrect": true},
        {"text": "False", "isCorrect": false},
        {"text": "'a'", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the output of: <code>my_dict = {1: 'a', 2: 'b'}</code><br><code>print('a' in my_dict)</code>",
      "options": [
        {"text": "True", "isCorrect": false},
        {"text": "False", "isCorrect": true},
        {"text": "1", "isCorrect": false},
        {"text": "An error will occur.", "isCorrect": false}
      ]
    },
    {
      "question": "The dictionary membership test (using the `in` keyword) checks for the presence of...",
      "options": [
        {"text": "Keys only.", "isCorrect": true},
        {"text": "Values only.", "isCorrect": false},
        {"text": "Both keys and values.", "isCorrect": false},
        {"text": "The index of the item.", "isCorrect": false}
      ]
    }
  ],

  // ----------------------------------------
  // 3. Math Questions (Linear Algebra) (50)
  // ----------------------------------------
  math: [
    {
      "question": "If A<b>v</b> = &lambda;<b>v</b> for a non-zero vector <b>v</b>, what is <b>v</b> called?",
      "options": [
        {"text": "An eigenvalue", "isCorrect": false},
        {"text": "An eigenvector", "isCorrect": true},
        {"text": "The characteristic vector", "isCorrect": false},
        {"text": "A null vector", "isCorrect": false}
      ]
    },
    {
      "question": "If A<b>v</b> = &lambda;<b>v</b> for a non-zero vector <b>v</b>, what is &lambda; called?",
      "options": [
        {"text": "An eigenvalue", "isCorrect": true},
        {"text": "An eigenvector", "isCorrect": false},
        {"text": "The determinant", "isCorrect": false},
        {"text": "The trace", "isCorrect": false}
      ]
    },
    {
      "question": "What is the characteristic equation used to find the eigenvalues (&lambda;) of a square matrix A?",
      "options": [
        {"text": "A<b>v</b> = &lambda;<b>v</b>", "isCorrect": false},
        {"text": "det(A - &lambda;I) = 0", "isCorrect": true},
        {"text": "det(A) = 0", "isCorrect": false},
        {"text": "A = PDP<sup>-1</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "The eigenvalues of a diagonal matrix are...",
      "options": [
        {"text": "Always zero.", "isCorrect": false},
        {"text": "The elements on its main diagonal.", "isCorrect": true},
        {"text": "Always 1.", "isCorrect": false},
        {"text": "The elements of its first row.", "isCorrect": false}
      ]
    },
    {
      "question": "The eigenvalues of an upper triangular matrix are...",
      "options": [
        {"text": "The elements on its main diagonal.", "isCorrect": true},
        {"text": "The sum of the diagonal elements.", "isCorrect": false},
        {"text": "Always zero.", "isCorrect": false},
        {"text": "The elements of its last column.", "isCorrect": false}
      ]
    },
    {
      "question": "If &lambda; is an eigenvalue of an invertible matrix A, what is an eigenvalue of A<sup>-1</sup>?",
      "options": [
        {"text": "&lambda;", "isCorrect": false},
        {"text": "-&lambda;", "isCorrect": false},
        {"text": "1 / &lambda;", "isCorrect": true},
        {"text": "&lambda;<sup>2</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "Find the eigenvalues of the matrix: A = [row 1: 2, 0; row 2: 0, 3]",
      "options": [
        {"text": "2 and 3", "isCorrect": true},
        {"text": "0 and 2", "isCorrect": false},
        {"text": "0 and 3", "isCorrect": false},
        {"text": "2 and 0", "isCorrect": false}
      ]
    },
    {
      "question": "The sum of the eigenvalues of a matrix is equal to its...",
      "options": [
        {"text": "Determinant", "isCorrect": false},
        {"text": "Rank", "isCorrect": false},
        {"text": "Trace", "isCorrect": true},
        {"text": "Inverse", "isCorrect": false}
      ]
    },
    {
      "question": "The product of the eigenvalues of a matrix is equal to its...",
      "options": [
        {"text": "Determinant", "isCorrect": true},
        {"text": "Rank", "isCorrect": false},
        {"text": "Trace", "isCorrect": false},
        {"text": "Signature", "isCorrect": false}
      ]
    },
    {
      "question": "An eigenvector <b>v</b> cannot be...",
      "options": [
        {"text": "A vector of all ones.", "isCorrect": false},
        {"text": "A zero vector.", "isCorrect": true},
        {"text": "A column vector.", "isCorrect": false},
        {"text": "A vector with negative entries.", "isCorrect": false}
      ]
    },
    {
      "question": "If a 2x2 matrix has eigenvalues 4 and 5, what is its determinant?",
      "options": [
        {"text": "9", "isCorrect": false},
        {"text": "1", "isCorrect": false},
        {"text": "20", "isCorrect": true},
        {"text": "Cannot be determined", "isCorrect": false}
      ]
    },
    {
      "question": "If a 2x2 matrix has eigenvalues 4 and 5, what is its trace?",
      "options": [
        {"text": "9", "isCorrect": true},
        {"text": "1", "isCorrect": false},
        {"text": "20", "isCorrect": false},
        {"text": "Cannot be determined", "isCorrect": false}
      ]
    },
    {
      "question": "How are eigenvectors <b>v</b> for an eigenvalue &lambda; found?",
      "options": [
        {"text": "By solving (A - &lambda;I)<b>v</b> = <b>0</b>", "isCorrect": true},
        {"text": "By solving A<b>v</b> = <b>0</b>", "isCorrect": false},
        {"text": "By finding the determinant of A", "isCorrect": false},
        {"text": "By inverting the matrix A", "isCorrect": false}
      ]
    },
    {
      "question": "If a matrix has an eigenvalue of 0, what does this imply about the matrix?",
      "options": [
        {"text": "The matrix is invertible.", "isCorrect": false},
        {"text": "The matrix is singular (not invertible).", "isCorrect": true},
        {"text": "The matrix is symmetric.", "isCorrect": false},
        {"text": "All other eigenvalues are also 0.", "isCorrect": false}
      ]
    },
    {
      "question": "If &lambda; is an eigenvalue of A, what is an eigenvalue of A<sup>3</sup>?",
      "options": [
        {"text": "3&lambda;", "isCorrect": false},
        {"text": "&lambda; + 3", "isCorrect": false},
        {"text": "&lambda;<sup>3</sup>", "isCorrect": true},
        {"text": "Cannot be determined", "isCorrect": false}
      ]
    },
    {
      "question": "What does the Cayley-Hamilton Theorem state?",
      "options": [
        {"text": "Every square matrix is diagonalizable.", "isCorrect": false},
        {"text": "Every square matrix satisfies its own characteristic equation.", "isCorrect": true},
        {"text": "A matrix's determinant is the product of its eigenvalues.", "isCorrect": false},
        {"text": "A matrix is invertible if its determinant is non-zero.", "isCorrect": false}
      ]
    },
    {
      "question": "If the characteristic equation of A is &lambda;<sup>2</sup> - 4&lambda; + 3 = 0, what equation is true by Cayley-Hamilton?",
      "options": [
        {"text": "A<sup>2</sup> - 4A + 3I = 0", "isCorrect": true},
        {"text": "A<sup>2</sup> - 4A = 3", "isCorrect": false},
        {"text": "A - 4I = 0", "isCorrect": false},
        {"text": "A = (4A - 3I)<sup>1/2</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "The Cayley-Hamilton theorem can be used to find...",
      "options": [
        {"text": "Only the eigenvalues of a matrix.", "isCorrect": false},
        {"text": "The inverse of a matrix (e.g., A<sup>-1</sup>).", "isCorrect": true},
        {"text": "Only the eigenvectors of a matrix.", "isCorrect": false},
        {"text": "The rank of a matrix.", "isCorrect": false}
      ]
    },
    {
      "question": "For A = [row 1: 1, 2; row 2: 3, 4], the characteristic equation is &lambda;<sup>2</sup> - 5&lambda; - 2 = 0. What is A<sup>2</sup> - 5A - 2I?",
      "options": [
        {"text": "The identity matrix, I", "isCorrect": false},
        {"text": "The matrix A itself", "isCorrect": false},
        {"text": "The zero matrix, 0", "isCorrect": true},
        {"text": "The inverse matrix, A<sup>-1</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "According to Cayley-Hamilton, p(A) = 0, where p(&lambda;) is the...",
      "options": [
        {"text": "Characteristic polynomial of A", "isCorrect": true},
        {"text": "Null space of A", "isCorrect": false},
        {"text": "Rank of A", "isCorrect": false},
        {"text": "Trace of A", "isCorrect": false}
      ]
    },
    {
      "question": "If A is invertible and A<sup>2</sup> + 3A + 2I = 0, what is A<sup>-1</sup>?",
      "options": [
        {"text": "A<sup>2</sup> + 3A", "isCorrect": false},
        {"text": "(-1/2)(A + 3I)", "isCorrect": true},
        {"text": "A + 3I", "isCorrect": false},
        {"text": "It cannot be found.", "isCorrect": false}
      ]
    },
    {
      "question": "Can the Cayley-Hamilton theorem be used for non-square matrices?",
      "options": [
        {"text": "Yes, always.", "isCorrect": false},
        {"text": "No, it applies only to square matrices.", "isCorrect": true},
        {"text": "Only if they have a non-zero determinant.", "isCorrect": false},
        {"text": "Only if they are symmetric.", "isCorrect": false}
      ]
    },
    {
      "question": "If A = [row 1: 2, 0; row 2: 0, 2], its characteristic equation is (&lambda;-2)<sup>2</sup> = 0. What is (A-2I)<sup>2</sup>?",
      "options": [
        {"text": "A", "isCorrect": false},
        {"text": "I", "isCorrect": false},
        {"text": "0 (the zero matrix)", "isCorrect": true},
        {"text": "A<sup>-1</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "The Cayley-Hamilton theorem is useful for calculating...",
      "options": [
        {"text": "The square root of a matrix.", "isCorrect": false},
        {"text": "High powers of a matrix (e.g., A<sup>100</sup>).", "isCorrect": true},
        {"text": "The logarithm of a matrix.", "isCorrect": false},
        {"text": "The singular values of a matrix.", "isCorrect": false}
      ]
    },
    {
      "question": "If p(&lambda;) = &lambda;<sup>3</sup> + 2&lambda; - 5I = 0 is the characteristic equation for A, what is A<sup>3</sup>?",
      "options": [
        {"text": "A<sup>3</sup> = -2A + 5I", "isCorrect": true},
        {"text": "A<sup>3</sup> = 2A - 5I", "isCorrect": false},
        {"text": "A<sup>3</sup> = 5I - 2A<sup>2</sup>", "isCorrect": false},
        {"text": "A<sup>3</sup> = 0", "isCorrect": false}
      ]
    },
    {
      "question": "A matrix A is diagonalizable if it can be written as...",
      "options": [
        {"text": "A = P + D + P<sup>-1</sup>", "isCorrect": false},
        {"text": "A = PDP<sup>-1</sup>", "isCorrect": true},
        {"text": "A = P + D", "isCorrect": false},
        {"text": "A = P D P<sup>T</sup>", "isCorrect": false}
      ]
    },
    {
      "question": "In the diagonalization formula A = PDP<sup>-1</sup>, what is D?",
      "options": [
        {"text": "A diagonal matrix of eigenvectors.", "isCorrect": false},
        {"text": "A diagonal matrix of eigenvalues.", "isCorrect": true},
        {"text": "An invertible matrix.", "isCorrect": false},
        {"text": "An orthogonal matrix.", "isCorrect": false}
      ]
    },
    {
      "question": "In the diagonalization formula A = PDP<sup>-1</sup>, what is P?",
      "options": [
        {"text": "A matrix whose columns are the eigenvalues.", "isCorrect": false},
        {"text": "A matrix whose rows are the eigenvectors.", "isCorrect": false},
        {"text": "A matrix whose columns are the linearly independent eigenvectors.", "isCorrect": true},
        {"text": "A diagonal matrix.", "isCorrect": false}
      ]
    },
    {
      "question": "An $n \\times n$ matrix $A$ is diagonalizable if and only if it has $n$ linearly independent...",
      "options": [
        {"text": "Eigenvalues", "isCorrect": false},
        {"text": "Eigenvectors", "isCorrect": true},
        {"text": "Rows", "isCorrect": false},
        {"text": "Pivots", "isCorrect": false}
      ]
    },
    {
      "question": "If an $n \\times n$ matrix has $n$ distinct (different) eigenvalues, it is...",
      "options": [
        {"text": "Guaranteed to be diagonalizable.", "isCorrect": true},
        {"text": "Never diagonalizable.", "isCorrect": false},
        {"text": "Guaranteed to be singular.", "isCorrect": false},
        {"text": "Guaranteed to be symmetric.", "isCorrect": false}
      ]
    },
    {
      "question": "Is the matrix A = [row 1: 1, 1; row 2: 0, 1] diagonalizable?",
      "options": [
        {"text": "Yes, because it is 2x2.", "isCorrect": false},
        {"text": "No, because it only has one eigenvalue (1) but not two linearly independent eigenvectors.", "isCorrect": true},
        {"text": "Yes, because its determinant is 1.", "isCorrect": false},
        {"text": "No, because it is not symmetric.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a key property of real symmetric matrices regarding diagonalization?",
      "options": [
        {"text": "They are never diagonalizable.", "isCorrect": false},
        {"text": "They are always orthogonally diagonalizable.", "isCorrect": true},
        {"text": "Their eigenvalues are always complex.", "isCorrect": false},
        {"text": "They only have one eigenvector.", "isCorrect": false}
      ]
    },
    {
      "question": "Diagonalization is very useful for what purpose?",
      "options": [
        {"text": "Calculating the inverse of a matrix.", "isCorrect": false},
        {"text": "Solving systems of linear equations.", "isCorrect": false},
        {"text": "Quickly computing high powers of a matrix (e.g., A<sup>k</sup>).", "isCorrect": true},
        {"text": "Finding the trace of a matrix.", "isCorrect": false}
      ]
    },
    {
      "question": "If A = PDP<sup>-1</sup>, what is A<sup>k</sup>?",
      "options": [
        {"text": "A<sup>k</sup> = P<sup>k</sup> D<sup>k</sup> (P<sup>-1</sup>)<sup>k</sup>", "isCorrect": false},
        {"text": "A<sup>k</sup> = P D<sup>k</sup> P<sup>-1</sup>", "isCorrect": true},
        {"text": "A<sup>k</sup> = P D P<sup>-k</sup>", "isCorrect": false},
        {"text": "A<sup>k</sup> = (PDP<sup>-1</sup>) + k", "isCorrect": false}
      ]
    },
    {
      "question": "If a matrix is diagonalizable, the diagonal entries of D are the...",
      "options": [
        {"text": "Eigenvalues of A", "isCorrect": true},
        {"text": "Eigenvectors of A", "isCorrect": false},
        {"text": "Pivots of A", "isCorrect": false},
        {"text": "Always 1", "isCorrect": false}
      ]
    },
    {
      "question": "A quadratic form is a polynomial in which all terms are of degree...",
      "options": [
        {"text": "One", "isCorrect": false},
        {"text": "Two", "isCorrect": true},
        {"text": "Three", "isCorrect": false},
        {"text": "Any degree", "isCorrect": false}
      ]
    },
    {
      "question": "The matrix $A$ associated with a quadratic form <b>x</b><sup>T</sup>A<b>x</b> must be...",
      "options": [
        {"text": "Invertible", "isCorrect": false},
        {"text": "Diagonal", "isCorrect": false},
        {"text": "Symmetric", "isCorrect": true},
        {"text": "Orthogonal", "isCorrect": false}
      ]
    },
    {
      "question": "A square matrix $P$ is called an orthogonal matrix if...",
      "options": [
        {"text": "P = P<sup>T</sup> (Symmetric)", "isCorrect": false},
        {"text": "P<sup>T</sup> = P<sup>-1</sup> (Transpose equals inverse)", "isCorrect": true},
        {"text": "P = -P<sup>T</sup> (Skew-symmetric)", "isCorrect": false},
        {"text": "Its determinant is 0.", "isCorrect": false}
      ]
    },
    {
      "question": "If $P$ is an orthogonal matrix, what is $P^{-1}$?",
      "options": [
        {"text": "P<sup>T</sup>", "isCorrect": true},
        {"text": "P", "isCorrect": false},
        {"text": "I", "isCorrect": false},
        {"text": "-P", "isCorrect": false}
      ]
    },
    {
      "question": "If $P$ is an orthogonal matrix, what is its determinant?",
      "options": [
        {"text": "0", "isCorrect": false},
        {"text": "1 or -1", "isCorrect": true},
        {"text": "Always 1", "isCorrect": false},
        {"text": "Greater than 1", "isCorrect": false}
      ]
    },
    {
      "question": "An orthogonal transformation <b>x</b> = P<b>y</b> reduces a quadratic form to a...",
      "options": [
        {"text": "Sum of squares (canonical form)", "isCorrect": true},
        {"text": "Zero matrix", "isCorrect": false},
        {"text": "Matrix with no eigenvalues", "isCorrect": false},
        {"text": "Singular matrix", "isCorrect": false}
      ]
    },
    {
      "question": "The 'canonical form' (or conical form) of a quadratic form contains no...",
      "options": [
        {"text": "Squared terms", "isCorrect": false},
        {"text": "Cross-product terms (e.g., x<sub>1</sub>x<sub>2</sub>)", "isCorrect": true},
        {"text": "Eigenvalues", "isCorrect": false},
        {"text": "Diagonal terms", "isCorrect": false}
      ]
    },
    {
      "question": "A quadratic form is 'positive definite' if...",
      "options": [
        {"text": "All its eigenvalues are negative.", "isCorrect": false},
        {"text": "All its eigenvalues are positive.", "isCorrect": true},
        {"text": "All its eigenvalues are zero.", "isCorrect": false},
        {"text": "All its eigenvalues are non-negative (&ge; 0).", "isCorrect": false}
      ]
    },
    {
      "question": "A quadratic form is 'positive semi-definite' if...",
      "options": [
        {"text": "All its eigenvalues are positive (> 0).", "isCorrect": false},
        {"text": "All its eigenvalues are non-negative (&ge; 0).", "isCorrect": true},
        {"text": "All its eigenvalues are negative (< 0).", "isCorrect": false},
        {"text": "All its eigenvalues are zero.", "isCorrect": false}
      ]
    },
    {
      "question": "The transformation that reduces a quadratic form to its canonical form is...",
      "options": [
        {"text": "A linear transformation", "isCorrect": false},
        {"text": "An orthogonal transformation", "isCorrect": true},
        {"text": "A singular transformation", "isCorrect": false},
        {"text": "A zero transformation", "isCorrect": false}
      ]
    },
    {
      "question": "A set of vectors {<b>v</b><sub>1</sub>, <b>v</b><sub>2</sub>, ..., <b>v</b><sub>k</sub>} is an 'orthogonal system' if...",
      "options": [
        {"text": "All vectors are parallel.", "isCorrect": false},
        {"text": "The dot product of any two *different* vectors is zero.", "isCorrect": true},
        {"text": "All vectors have a magnitude of 1.", "isCorrect": false},
        {"text": "The sum of the vectors is zero.", "isCorrect": false}
      ]
    },
    {
      "question": "A set of orthogonal vectors is...",
      "options": [
        {"text": "Always linearly dependent.", "isCorrect": false},
        {"text": "Always linearly independent (if non-zero).", "isCorrect": true},
        {"text": "Always a basis for R<sup>n</sup>.", "isCorrect": false},
        {"text": "Always contains the zero vector.", "isCorrect": false}
      ]
    },
    {
      "question": "What does Sylvester's Law of Inertia state is invariant (unchanged) under a non-singular linear transformation?",
      "options": [
        {"text": "The eigenvalues.", "isCorrect": false},
        {"text": "The eigenvectors.", "isCorrect": false},
        {"text": "The number of positive, negative, and zero terms (the signature).", "isCorrect": true},
        {"text": "The determinant.", "isCorrect": false}
      ]
    },
    {
      "question": "The 'signature' of a quadratic form refers to...",
      "options": [
        {"text": "The determinant of its matrix.", "isCorrect": false},
        {"text": "The pair of numbers (index, rank).", "isCorrect": true},
        {"text": "The set of all its eigenvalues.", "isCorrect": false},
        {"text": "The trace of its matrix.", "isCorrect": false}
      ]
    },
    {
      "question": "In Sylvester's Law, the 'index' of a quadratic form is the number of...",
      "options": [
        {"text": "Positive terms in its canonical form.", "isCorrect": true},
        {"text": "Negative terms in its canonical form.", "isCorrect": false},
        {"text": "Zero terms in its canonical form.", "isCorrect": false},
        {"text": "Total terms in its canonical form.", "isCorrect": false}
      ]
    }
  ],

  // ----------------------------------------
  // 4. iot Questions (50)
  // ----------------------------------------
  iot: [
    {
      "question": "What is Requirements Engineering?",
      "options": [
        {"text": "The process of writing code for a system.", "isCorrect": false},
        {"text": "The broad spectrum of tasks that lead to an understanding of requirements.", "isCorrect": true},
        {"text": "The process of testing and debugging software.", "isCorrect": false},
        {"text": "The act of designing the system's architecture.", "isCorrect": false}
      ]
    },
    {
      "question": "Requirements engineering builds a bridge to which two activities?",
      "options": [
        {"text": "Communication and Planning", "isCorrect": false},
        {"text": "Design and Construction", "isCorrect": true},
        {"text": "Testing and Deployment", "isCorrect": false},
        {"text": "Inception and Elicitation", "isCorrect": false}
      ]
    },
    {
      "question": "Which of the following is NOT one of the seven distinct tasks of requirements engineering?",
      "options": [
        {"text": "Elicitation", "isCorrect": false},
        {"text": "Negotiation", "isCorrect": false},
        {"text": "Coding", "isCorrect": true},
        {"text": "Validation", "isCorrect": false}
      ]
    },
    {
      "question": "When does a project typically begin?",
      "options": [
        {"text": "When the design is complete.", "isCorrect": false},
        {"text": "When a business need is identified.", "isCorrect": true},
        {"text": "When the first line of code is written.", "isCorrect": false},
        {"text": "When the validation task starts.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the goal of the 'Inception' task?",
      "options": [
        {"text": "To write the final software specification.", "isCorrect": false},
        {"text": "To establish a basic understanding of the problem and the desired solution.", "isCorrect": true},
        {"text": "To test the completed software.", "isCorrect": false},
        {"text": "To negotiate the cost and timeline.", "isCorrect": false}
      ]
    },
    {
      "question": "Which of the following is a type of feasibility study mentioned in the text?",
      "options": [
        {"text": "Cultural Feasibility", "isCorrect": false},
        {"text": "Economic Feasibility", "isCorrect": true},
        {"text": "Modular Feasibility", "isCorrect": false},
        {"text": "Design Feasibility", "isCorrect": false}
      ]
    },
    {
      "question": "The 'Elicitation' task primarily involves...",
      "options": [
        {"text": "Asking the customer about the system objectives and what is to be accomplished.", "isCorrect": true},
        {"text": "Writing the code for the user interface.", "isCorrect": false},
        {"text": "Debugging the requirements model.", "isCorrect": false},
        {"text": "Creating a final, written contract.", "isCorrect": false}
      ]
    },
    {
      "question": "When a customer is not completely sure of what is needed, this is known as a problem of:",
      "options": [
        {"text": "Scope", "isCorrect": false},
        {"text": "Volatility", "isCorrect": false},
        {"text": "Understanding", "isCorrect": true},
        {"text": "Negotiation", "isCorrect": false}
      ]
    },
    {
      "question": "When 'the requirements change over time', this is known as a problem of:",
      "options": [
        {"text": "Scope", "isCorrect": false},
        {"text": "Volatility", "isCorrect": true},
        {"text": "Understanding", "isCorrect": false},
        {"text": "Elaboration", "isCorrect": false}
      ]
    },
    {
      "question": "What is the main purpose of the 'Elaboration' task?",
      "options": [
        {"text": "To get initial project funding.", "isCorrect": false},
        {"text": "To expand and refine the information obtained during inception and elicitation.", "isCorrect": true},
        {"text": "To define the final project deadlines.", "isCorrect": false},
        {"text": "To test the final product.", "isCorrect": false}
      ]
    },
    {
      "question": "Elaboration is driven by the creation and refinement of what?",
      "options": [
        {"text": "Legal contracts", "isCorrect": false},
        {"text": "User scenarios", "isCorrect": true},
        {"text": "Marketing plans", "isCorrect": false},
        {"text": "Hardware specifications", "isCorrect": false}
      ]
    },
    {
      "question": "The 'Negotiation' task is required to reconcile...",
      "options": [
        {"text": "Different programming languages.", "isCorrect": false},
        {"text": "Conflicting requirements from different stakeholders.", "isCorrect": true},
        {"text": "Errors in the code.", "isCorrect": false},
        {"text": "Hardware and software compatibility.", "isCorrect": false}
      ]
    },
    {
      "question": "The best negotiations strive for what kind of result?",
      "options": [
        {"text": "A 'win-lose' result where the developer wins.", "isCorrect": false},
        {"text": "A 'win-win' result for all stakeholders.", "isCorrect": true},
        {"text": "A 'lose-lose' result to ensure compromise.", "isCorrect": false},
        {"text": "A result where the customer gets everything they asked for.", "isCorrect": false}
      ]
    },
    {
      "question": "According to the text, a 'Specification' can be a...",
      "options": [
        {"text": "Written document, a set of graphical models, or a prototype.", "isCorrect": true},
        {"text": "Meeting agenda only.", "isCorrect": false},
        {"text": "Test plan only.", "isCorrect": false},
        {"text": "List of developers on the team.", "isCorrect": false}
      ]
    },
    {
      "question": "The 'Validation' phase focuses on what activity?",
      "options": [
        {"text": "Gathering initial ideas.", "isCorrect": false},
        {"text": "Checking for errors and debugging the requirements.", "isCorrect": true},
        {"text": "Hiring the development team.", "isCorrect": false},
        {"text": "Negotiating the budget.", "isCorrect": false}
      ]
    },
    {
      "question": "What is 'Requirements Management'?",
      "options": [
        {"text": "The task of managing the project's budget.", "isCorrect": false},
        {"text": "The set of activities for identifying, controlling, and tracking requirements.", "isCorrect": true},
        {"text": "The process of managing the software developers.", "isCorrect": false},
        {"text": "The act of writing the user manual.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Stakeholder'?",
      "options": [
        {"text": "Only the person paying for the project.", "isCorrect": false},
        {"text": "Only the end-users of the system.", "isCorrect": false},
        {"text": "Anyone who benefits in a direct or indirect way from the system.", "isCorrect": true},
        {"text": "Only the software engineers on the team.", "isCorrect": false}
      ]
    },
    {
      "question": "Which of the following is an example of a stakeholder?",
      "options": [
        {"text": "A competitor's CEO", "isCorrect": false},
        {"text": "Business operations managers", "isCorrect": true},
        {"text": "A university professor", "isCorrect": false},
        {"text": "A random person on the street", "isCorrect": false}
      ]
    },
    {
      "question": "Why is it important to recognize 'Multiple Viewpoints'?",
      "options": [
        {"text": "Because requirements may be inconsistent or conflict with one another.", "isCorrect": true},
        {"text": "Because it proves the project is too complicated.", "isCorrect": false},
        {"text": "Because it helps decide which programming language to use.", "isCorrect": false},
        {"text": "Because it is a legal requirement.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the job of a requirements engineer regarding collaboration?",
      "options": [
        {"text": "To always side with the customer.", "isCorrect": false},
        {"text": "To identify areas of commonality and areas of conflict.", "isCorrect": true},
        {"text": "To ignore all stakeholders and build their own vision.", "isCorrect": false},
        {"text": "To choose the cheapest requirements.", "isCorrect": false}
      ]
    },
    {
      "question": "'Who will use the solution?' and 'What will be the economic benefit?' are examples of what?",
      "options": [
        {"text": "Final validation questions.", "isCorrect": false},
        {"text": "Test cases.", "isCorrect": false},
        {"text": "The 'first questions' asked during inception.", "isCorrect": true},
        {"text": "Non-functional requirements.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the goal of 'Collaborative Requirements Gathering'?",
      "options": [
        {"text": "To identify the problem, propose solutions, and negotiate requirements in a team setting.", "isCorrect": true},
        {"text": "To have a formal meeting where developers present the final product.", "isCorrect": false},
        {"text": "To write the entire user manual in one session.", "isCorrect": false},
        {"text": "To let the customer and developer work in complete isolation.", "isCorrect": false}
      ]
    },
    {
      "question": "A 'facilitator' is often used to control meetings in which elicitation technique?",
      "options": [
        {"text": "Collaborative Requirements Gathering", "isCorrect": true},
        {"text": "Validation", "isCorrect": false},
        {"text": "Inception", "isCorrect": false},
        {"text": "Specification", "isCorrect": false}
      ]
    },
    {
      "question": "What is another name for a 'Usage Scenario'?",
      "options": [
        {"text": "A State Diagram", "isCorrect": false},
        {"text": "A 'Use-Case' or 'user story'", "isCorrect": true},
        {"text": "A Feasibility Study", "isCorrect": false},
        {"text": "A Class Diagram", "isCorrect": false}
      ]
    },
    {
      "question": "A 'bounded statement of scope' is what kind of work product?",
      "options": [
        {"text": "A design work product", "isCorrect": false},
        {"text": "A testing work product", "isCorrect": false},
        {"text": "An elicitation work product", "isCorrect": true},
        {"text": "A management work product", "isCorrect": false}
      ]
    },
    {
      "question": "What does a 'Use Case' capture?",
      "options": [
        {"text": "A contract describing the system's behavior in response to a request.", "isCorrect": true},
        {"text": "The developer's name and salary.", "isCorrect": false},
        {"text": "A list of all bugs in the code.", "isCorrect": false},
        {"text": "The hardware specifications required to run the system.", "isCorrect": false}
      ]
    },
    {
      "question": "A use case depicts the software from which point of view?",
      "options": [
        {"text": "The developer's", "isCorrect": false},
        {"text": "The end user's", "isCorrect": true},
        {"text": "The project manager's", "isCorrect": false},
        {"text": "The database's", "isCorrect": false}
      ]
    },
    {
      "question": "What is the first step in writing a use case?",
      "options": [
        {"text": "Define the set of 'actors'.", "isCorrect": true},
        {"text": "Draw the graphical model.", "isCorrect": false},
        {"text": "Write the test case.", "isCorrect": false},
        {"text": "Choose the programming language.", "isCorrect": false}
      ]
    },
    {
      "question": "In a use case, what is an 'Actor'?",
      "options": [
        {"text": "The developer writing the code.", "isCorrect": false},
        {"text": "A person or device that uses the system.", "isCorrect": true},
        {"text": "A type of data diagram.", "isCorrect": false},
        {"text": "A software bug.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Primary Actor'?",
      "options": [
        {"text": "An actor that supports the system so others can work.", "isCorrect": false},
        {"text": "An actor that works directly and frequently with the software.", "isCorrect": true},
        {"text": "The main developer on the project.", "isCorrect": false},
        {"text": "The stakeholder with the most money.", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Secondary Actor'?",
      "options": [
        {"text": "An actor that supports the system so that primary actors can do their work.", "isCorrect": true},
        {"text": "An actor that works directly with the software.", "isCorrect": false},
        {"text": "The end-user.", "isCorrect": false},
        {"text": "The customer.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the intent of the 'Analysis Model' (Requirements Model)?",
      "options": [
        {"text": "To be a static, unchanging contract.", "isCorrect": false},
        {"text": "To provide a description of the required informational, functional, and behavioral domains.", "isCorrect": true},
        {"text": "To list all the developers on the team.", "isCorrect": false},
        {"text": "To be the final user manual.", "isCorrect": false}
      ]
    },
    {
      "question": "Which element of the requirements model is described from the user’s point of view?",
      "options": [
        {"text": "Class-based elements", "isCorrect": false},
        {"text": "Behavioral elements", "isCorrect": false},
        {"text": "Flow-oriented elements", "isCorrect": false},
        {"text": "Scenario-based elements", "isCorrect": true}
      ]
    },
    {
      "question": "Class-based elements categorize objects that have similar attributes and common...?",
      "options": [
        {"text": "Behaviors", "isCorrect": true},
        {"text": "Use cases", "isCorrect": false},
        {"text": "Flows", "isCorrect": false},
        {"text": "Data sources", "isCorrect": false}
      ]
    },
    {
      "question": "What does a 'State Diagram' represent?",
      "options": [
        {"text": "The flow of data through a system.", "isCorrect": false},
        {"text": "The behavior of a system by depicting its states and the events that cause state changes.", "isCorrect": true},
        {"text": "The classes and their relationships.", "isCorrect": false},
        {"text": "The scenarios of user interaction.", "isCorrect": false}
      ]
    },
    {
      "question": "In a state diagram, what is a 'state'?",
      "options": [
        {"text": "Any externally observable mode of behavior.", "isCorrect": true},
        {"text": "A piece of data.", "isCorrect": false},
        {"text": "A function or method.", "isCorrect": false},
        {"text": "A user.", "isCorrect": false}
      ]
    },
    {
      "question": "Which element type deals with how information is transformed as it flows through a system?",
      "options": [
        {"text": "Flow-oriented elements", "isCorrect": true},
        {"text": "Behavioral elements", "isCorrect": false},
        {"text": "Class-based elements", "isCorrect": false},
        {"text": "Scenario-based elements", "isCorrect": false}
      ]
    },
    {
      "question": "A Data Flow Diagram (DFD) is an example of which type of requirements model element?",
      "options": [
        {"text": "Class-based", "isCorrect": false},
        {"text": "Behavioral", "isCorrect": false},
        {"text": "Flow-oriented", "isCorrect": true},
        {"text": "Scenario-based", "isCorrect": false}
      ]
    },
    {
      "question": "What is an 'Analysis Pattern'?",
      "options": [
        {"text": "A bug that reoccurs in the code.", "isCorrect": false},
        {"text": "A solution for a problem that reoccurs across projects in a specific domain.", "isCorrect": true},
        {"text": "A standard template for a specification document.", "isCorrect": false},
        {"text": "A diagram showing the flow of data.", "isCorrect": false}
      ]
    },
    {
      "question": "What is the purpose of 'Validating Requirements'?",
      "options": [
        {"text": "To check the model for inconsistency, omissions, and ambiguity.", "isCorrect": true},
        {"text": "To write the code.", "isCorrect": false},
        {"text": "To hire the team.", "isCorrect": false},
        {"text": "To gather the initial requirements.", "isCorrect": false}
      ]
    },
    {
      "question": "A validation review asks if a requirement is 'testable'. What does this mean?",
      "options": [
        {"text": "Can it be understood by the customer?", "isCorrect": false},
        {"text": "Can a test be created to prove that the requirement is met?", "isCorrect": true},
        {"text": "Is the requirement necessary?", "isCorrect": false},
        {"text": "Is the requirement from a valid source?", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Functional Requirement'?",
      "options": [
        {"text": "It defines 'how' the system should operate (e.g., performance).", "isCorrect": false},
        {"text": "It defines the specific features and operations the system must perform (e.g., user login).", "isCorrect": true},
        {"text": "It defines the project's budget.", "isCorrect": false},
        {"text": "It defines the timeline for the project.", "isCorrect": false}
      ]
    },
    {
      "question": "'User authentication' and 'report generation' are examples of what?",
      "options": [
        {"text": "Functional requirements", "isCorrect": true},
        {"text": "Non-functional requirements", "isCorrect": false},
        {"text": "Analysis patterns", "isCorrect": false},
        {"text": "Feasibility studies", "isCorrect": false}
      ]
    },
    {
      "question": "What is a 'Non-functional Requirement'?",
      "options": [
        {"text": "A requirement that is not important.", "isCorrect": false},
        {"text": "It defines 'how' the system should operate (e.g., performance, security).", "isCorrect": true},
        {"text": "It defines a specific feature, like a button.", "isCorrect": false},
        {"text": "It is an optional requirement.", "isCorrect": false}
      ]
    },
    {
      "question": "'Performance', 'security', and 'usability' are examples of what?",
      "options": [
        {"text": "Functional requirements", "isCorrect": false},
        {"text": "Non-functional requirements", "isCorrect": true},
        {"text": "Use cases", "isCorrect": false},
        {"text": "Actors", "isCorrect": false}
      ]
    },
    {
      "question": "Which task involves 'expanding and refining' information from inception and elicitation?",
      "options": [
        {"text": "Validation", "isCorrect": false},
        {"text": "Negotiation", "isCorrect": false},
        {"text": "Elaboration", "isCorrect": true},
        {"text": "Specification", "isCorrect": false}
      ]
    },
    {
      "question": "'Problems of scope' mean that the system boundary is...",
      "options": [
        {"text": "perfectly defined.", "isCorrect": false},
        {"text": "ill-defined or unclear.", "isCorrect": true},
        {"text": "constantly changing.", "isCorrect": false},
        {"text": "too small.", "isCorrect": false}
      ]
    },
    {
      "question": "'Technical Feasibility' and 'Economic Feasibility' are part of what?",
      "options": [
        {"text": "The Feasibility Study", "isCorrect": true},
        {"text": "The Specification Document", "isCorrect": false},
        {"text": "The Validation Check", "isCorrect": false},
        {"text": "The Use Case Model", "isCorrect": false}
      ]
    },
    {
      "question": "Which task involves 'identifying, controlling, tracking, and establishing' requirements?",
      "options": [
        {"text": "Inception", "isCorrect": false},
        {"text": "Elicitation", "isCorrect": false},
        {"text": "Requirements Management", "isCorrect": true},
        {"text": "Negotiation", "isCorrect": false}
      ]
    },
    {
      "question": "A 'Software specification' can be a written document, graphical models, or a...?",
      "options": [
        {"text": "Prototype", "isCorrect": true},
        {"text": "Final bill", "isCorrect": false},
        {"text": "List of developers", "isCorrect": false},
        {"text": "Meeting agenda", "isCorrect": false}
      ]
    }
  ]
};