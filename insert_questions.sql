-- =========================================================================
-- Auto-generated: Normalized Schema Data Dump (Regex Python Generator)
-- =========================================================================

-- ----------------------------------------
-- Data for subject: fds
-- ----------------------------------------

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the definition of a Reference Electrode?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'An electrode with a potential that changes with the solution''s concentration.', false),
  ((SELECT id FROM inserted_question), 'An electrode that has a stable and reproducible potential.', true),
  ((SELECT id FROM inserted_question), 'An electrode made only of glass and platinum.', false),
  ((SELECT id FROM inserted_question), 'An electrode that can only be used for oxidation reactions.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In a Calomel Electrode, what is the layer directly above the liquid mercury?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A paste of Hg and Hg<sub>2</sub>Cl<sub>2</sub> (Calomel)', true),
  ((SELECT id FROM inserted_question), 'A 0.1M HCl solution', false),
  ((SELECT id FROM inserted_question), 'A silver chloride (AgCl) coating', false),
  ((SELECT id FROM inserted_question), 'A porous graphite rod', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the main demerit of using a Calomel Electrode?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It is not portable or compact.', false),
  ((SELECT id FROM inserted_question), 'It cannot be used above 50°C as Hg<sub>2</sub>Cl<sub>2</sub> starts decomposing.', true),
  ((SELECT id FROM inserted_question), 'It gives inaccurate results in acidic solutions.', false),
  ((SELECT id FROM inserted_question), 'It must be stored in the dark.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'If a Calomel Electrode acts as a cathode (reduction), what is the correct reaction?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '2Hg + 2Cl<sup>-</sup> &rarr; Hg<sub>2</sub>Cl<sub>2</sub> + 2e<sup>-</sup>', false),
  ((SELECT id FROM inserted_question), 'Hg<sub>2</sub>Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Hg + 2Cl<sup>-</sup>', true),
  ((SELECT id FROM inserted_question), 'H<sup>+</sup> + e<sup>-</sup> &rarr; &frac12;H<sub>2</sub>', false),
  ((SELECT id FROM inserted_question), 'Ag + Cl<sup>-</sup> &rarr; AgCl + e<sup>-</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the key component at the bottom of a Glass Electrode?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A platinum wire', false),
  ((SELECT id FROM inserted_question), 'A calomel paste', false),
  ((SELECT id FROM inserted_question), 'A thin-walled glass membrane bulb', true),
  ((SELECT id FROM inserted_question), 'A porous asbestos plug', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'The potential of a Glass Electrode (E<sub>G</sub>) is directly proportional to the solution''s...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Temperature', false),
  ((SELECT id FROM inserted_question), 'Conductivity', false),
  ((SELECT id FROM inserted_question), 'Volume', false),
  ((SELECT id FROM inserted_question), 'pH', true);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Which of the following is an advantage of a Glass Electrode?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It is portable and compact.', true),
  ((SELECT id FROM inserted_question), 'It works well at temperatures above 50°C.', false),
  ((SELECT id FROM inserted_question), 'It is very cheap to manufacture.', false),
  ((SELECT id FROM inserted_question), 'It does not require a salt bridge.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a Conductometric Titration?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A titration where the end point is noted by a color change.', false),
  ((SELECT id FROM inserted_question), 'A titration where the end point is noted by measuring conductance.', true),
  ((SELECT id FROM inserted_question), 'A titration that measures the pH of the solution.', false),
  ((SELECT id FROM inserted_question), 'A titration that only works with colored solutions.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Conductance (C) is defined as the reciprocal of...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Resistance (R)', true),
  ((SELECT id FROM inserted_question), 'Voltage (V)', false),
  ((SELECT id FROM inserted_question), 'Current (I)', false),
  ((SELECT id FROM inserted_question), 'Length (L)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the unit of Conductance?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Ohm', false),
  ((SELECT id FROM inserted_question), 'Ohm-cm', false),
  ((SELECT id FROM inserted_question), 'Ohm<sup>-1</sup> (or Siemens)', true),
  ((SELECT id FROM inserted_question), 'cm<sup>-1</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the unit of the Cell Constant (L/A)?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'cm<sup>-1</sup>', true),
  ((SELECT id FROM inserted_question), 'cm<sup>2</sup>', false),
  ((SELECT id FROM inserted_question), 'cm', false),
  ((SELECT id FROM inserted_question), 'Ohm-cm', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In the titration of a strong acid (HCl) with a strong base (NaOH), why does conductance decrease before the equivalence point?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The total number of ions decreases.', false),
  ((SELECT id FROM inserted_question), 'The highly mobile H<sup>+</sup> ions are replaced by less mobile Na<sup>+</sup> ions.', true),
  ((SELECT id FROM inserted_question), 'The solution becomes diluted.', false),
  ((SELECT id FROM inserted_question), 'The salt (NaCl) formed is a non-conductor.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In the titration of a strong acid (HCl) with a strong base (NaOH), why does conductance increase *after* the equivalence point?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The concentration of the salt (NaCl) increases.', false),
  ((SELECT id FROM inserted_question), 'The temperature of the solution increases.', false),
  ((SELECT id FROM inserted_question), 'Excess, highly mobile OH<sup>-</sup> ions are added from the strong base.', true),
  ((SELECT id FROM inserted_question), 'Water is formed, which increases conductance.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the wavelength range for UV (Ultraviolet) radiation?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '200 - 380 nm', true),
  ((SELECT id FROM inserted_question), '380 - 780 nm', false),
  ((SELECT id FROM inserted_question), '0.1 - 200 nm', false),
  ((SELECT id FROM inserted_question), '780 - 1000 nm', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the wavelength range for Visible radiation?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '200 - 380 nm', false),
  ((SELECT id FROM inserted_question), '380 - 780 nm', true),
  ((SELECT id FROM inserted_question), '10 - 200 nm', false),
  ((SELECT id FROM inserted_question), '100 - 300 nm', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What happens to a molecule when it absorbs UV-Visible radiation?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It causes molecular vibration.', false),
  ((SELECT id FROM inserted_question), 'It causes molecular rotation.', false),
  ((SELECT id FROM inserted_question), 'It causes excitation of electrons to a higher energy level.', true),
  ((SELECT id FROM inserted_question), 'It causes the nucleus to spin.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In a UV-Visible spectrophotometer, what is the function of the radiation source?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To select a single wavelength of light.', false),
  ((SELECT id FROM inserted_question), 'To generate a high-intensity beam of polychromatic radiation.', true),
  ((SELECT id FROM inserted_question), 'To convert light energy into electrical current.', false),
  ((SELECT id FROM inserted_question), 'To hold the sample.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What radiation source is most commonly used for the *Visible* region?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A Tungsten filament lamp', true),
  ((SELECT id FROM inserted_question), 'A Deuterium lamp', false),
  ((SELECT id FROM inserted_question), 'A Nernst glower', false),
  ((SELECT id FROM inserted_question), 'A Quartz lamp', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What radiation source is commonly used for the *UV* region?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A Tungsten filament lamp', false),
  ((SELECT id FROM inserted_question), 'A Deuterium lamp', true),
  ((SELECT id FROM inserted_question), 'A glass filter', false),
  ((SELECT id FROM inserted_question), 'A Photomultiplier tube', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the function of a Monochromator?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To hold the sample solution.', false),
  ((SELECT id FROM inserted_question), 'To convert polychromatic radiation into monochromatic radiation.', true),
  ((SELECT id FROM inserted_question), 'To amplify the signal from the detector.', false),
  ((SELECT id FROM inserted_question), 'To generate the initial beam of light.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Sample holders (cuvettes) for UV-Visible spectroscopy are typically made of what material?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Plastic', false),
  ((SELECT id FROM inserted_question), 'Pyrex glass', false),
  ((SELECT id FROM inserted_question), 'Quartz or Fused Silica', true),
  ((SELECT id FROM inserted_question), 'Aluminum', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the function of the Detector in a spectrophotometer?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To convert light energy (transmitted light) into an electrical signal.', true),
  ((SELECT id FROM inserted_question), 'To select a specific wavelength of light.', false),
  ((SELECT id FROM inserted_question), 'To record the output on a graph.', false),
  ((SELECT id FROM inserted_question), 'To filter out stray light.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Which of the following is an application of UV-Visible spectroscopy?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Detection of impurities', true),
  ((SELECT id FROM inserted_question), 'Separation of proteins', false),
  ((SELECT id FROM inserted_question), 'Measurement of pH', false),
  ((SELECT id FROM inserted_question), 'Synthesis of organic compounds', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'How can UV-Visible spectroscopy distinguish between conjugated and non-conjugated compounds?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Conjugated systems absorb at shorter wavelengths.', false),
  ((SELECT id FROM inserted_question), 'Conjugated systems absorb at longer wavelengths.', true),
  ((SELECT id FROM inserted_question), 'Non-conjugated systems do not absorb light.', false),
  ((SELECT id FROM inserted_question), 'Only non-conjugated systems are visible to the detector.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Which electronic transition generally requires the *most* energy?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'n → &pi;<sup>*</sup>', false),
  ((SELECT id FROM inserted_question), '&pi; → &pi;<sup>*</sup>', false),
  ((SELECT id FROM inserted_question), '&sigma; → &sigma;<sup>*</sup>', true),
  ((SELECT id FROM inserted_question), 'n → &sigma;<sup>*</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Which electronic transition generally requires the *least* energy?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'n → &pi;<sup>*</sup>', true),
  ((SELECT id FROM inserted_question), '&pi; → &pi;<sup>*</sup>', false),
  ((SELECT id FROM inserted_question), '&sigma; → &sigma;<sup>*</sup>', false),
  ((SELECT id FROM inserted_question), 'n → &sigma;<sup>*</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'A &sigma; &rarr; &sigma;<sup>*</sup> transition is typical for which type of compound?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Alkenes (C=C)', false),
  ((SELECT id FROM inserted_question), 'Saturated hydrocarbons (e.g., Methane, CH<sub>4</sub>)', true),
  ((SELECT id FROM inserted_question), 'Alcohols (-OH)', false),
  ((SELECT id FROM inserted_question), 'Carbonyl compounds (C=O)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'A &pi; &rarr; &pi;<sup>*</sup> transition is characteristic of compounds containing...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Single bonds only', false),
  ((SELECT id FROM inserted_question), 'Lone pairs of electrons', false),
  ((SELECT id FROM inserted_question), 'Unsaturated groups (e.g., alkenes, alkynes)', true),
  ((SELECT id FROM inserted_question), 'Only sigma bonds', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a Chromophore?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A saturated group with a lone pair of electrons.', false),
  ((SELECT id FROM inserted_question), 'A covalently unsaturated group (like C=C, C=O) responsible for absorption.', true),
  ((SELECT id FROM inserted_question), 'The solvent used in the spectrophotometer.', false),
  ((SELECT id FROM inserted_question), 'A shift to a longer wavelength.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is an Auxochrome?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A group (like -OH, -NH<sub>2</sub>) with lone pairs that, when attached to a chromophore, changes the absorption.', true),
  ((SELECT id FROM inserted_question), 'Any group that contains a double bond.', false),
  ((SELECT id FROM inserted_question), 'The part of the detector that measures light.', false),
  ((SELECT id FROM inserted_question), 'A shift to a shorter wavelength.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'A ''Bathochromic Shift'' is also known as a...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Red Shift (to a longer wavelength)', true),
  ((SELECT id FROM inserted_question), 'Blue Shift (to a shorter wavelength)', false),
  ((SELECT id FROM inserted_question), 'Hyperchromic Shift (to higher intensity)', false),
  ((SELECT id FROM inserted_question), 'Hypochromic Shift (to lower intensity)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'A ''Hypsochromic Shift'' is also known as a...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Red Shift (to a longer wavelength)', false),
  ((SELECT id FROM inserted_question), 'Blue Shift (to a shorter wavelength)', true),
  ((SELECT id FROM inserted_question), 'Hyperchromic Shift (to higher intensity)', false),
  ((SELECT id FROM inserted_question), 'Hypochromic Shift (to lower intensity)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a ''Hyperchromic Shift''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A shift to a longer wavelength', false),
  ((SELECT id FROM inserted_question), 'A shift to a shorter wavelength', false),
  ((SELECT id FROM inserted_question), 'An increase in absorption intensity', true),
  ((SELECT id FROM inserted_question), 'A decrease in absorption intensity', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a ''Hypochromic Shift''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A shift to a longer wavelength', false),
  ((SELECT id FROM inserted_question), 'A shift to a shorter wavelength', false),
  ((SELECT id FROM inserted_question), 'An increase in absorption intensity', false),
  ((SELECT id FROM inserted_question), 'A decrease in absorption intensity', true);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Lambert''s Law states that the rate of decrease in light intensity is proportional to the...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Concentration of the solution', false),
  ((SELECT id FROM inserted_question), 'Path length of the solution', true),
  ((SELECT id FROM inserted_question), 'Temperature of the solution', false),
  ((SELECT id FROM inserted_question), 'Wavelength of the light', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'Beer''s Law states that the rate of decrease in light intensity is proportional to the...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Concentration of the solution', true),
  ((SELECT id FROM inserted_question), 'Path length of the solution', false),
  ((SELECT id FROM inserted_question), 'Density of the solution', false),
  ((SELECT id FROM inserted_question), 'Volume of the cuvette', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A device that converts electrical energy into chemical energy.', false),
  ((SELECT id FROM inserted_question), 'A device that converts chemical energy into electrical energy.', true),
  ((SELECT id FROM inserted_question), 'A device that only stores electrical charge, like a capacitor.', false),
  ((SELECT id FROM inserted_question), 'A device that measures the pH of a solution.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is ''Discharging'' in a battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Reversing the cell reaction by passing an external current.', false),
  ((SELECT id FROM inserted_question), 'Converting inactive material back into active material.', false),
  ((SELECT id FROM inserted_question), 'Converting active material into inactive material during a redox reaction.', true),
  ((SELECT id FROM inserted_question), 'The battery leaking its electrolyte.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is ''Charging'' in a battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The process of converting inactive material back into active material.', true),
  ((SELECT id FROM inserted_question), 'The battery losing charge even when not in use.', false),
  ((SELECT id FROM inserted_question), 'The battery generating its maximum voltage.', false),
  ((SELECT id FROM inserted_question), 'The battery''s redox reaction running in the forward direction.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the ''Cycle Life'' of a battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The total time the battery can be stored.', false),
  ((SELECT id FROM inserted_question), 'The number of times a rechargeable battery can be discharged and recharged.', true),
  ((SELECT id FROM inserted_question), 'The total energy the battery can hold per unit weight.', false),
  ((SELECT id FROM inserted_question), 'The rate of self-discharge.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the ''Shelf Life'' of a battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The time the battery can be stored without significant loss of charge.', true),
  ((SELECT id FROM inserted_question), 'The number of recharge cycles.', false),
  ((SELECT id FROM inserted_question), 'The battery''s voltage.', false),
  ((SELECT id FROM inserted_question), 'The battery''s power density.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the ''Energy Density'' of a battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The total voltage of the cell.', false),
  ((SELECT id FROM inserted_question), 'The energy available per unit weight of the cell.', true),
  ((SELECT id FROM inserted_question), 'The number of recharge cycles.', false),
  ((SELECT id FROM inserted_question), 'The time it takes to charge the battery.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In a Nickel-Metal Hydride (Ni-MH) battery, what is the anode material?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Nickel oxyhydroxide (NiO(OH))', false),
  ((SELECT id FROM inserted_question), 'Metal Hydrides (MH or MH<sub>2</sub>)', true),
  ((SELECT id FROM inserted_question), 'Aqueous KOH', false),
  ((SELECT id FROM inserted_question), 'Lithium metal', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In a Nickel-Metal Hydride (Ni-MH) battery, what is the cathode material?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Nickel oxyhydroxide (NiO(OH))', true),
  ((SELECT id FROM inserted_question), 'Metal Hydrides (MH or MH<sub>2</sub>)', false),
  ((SELECT id FROM inserted_question), 'Aqueous KOH', false),
  ((SELECT id FROM inserted_question), 'Manganese Dioxide (MnO<sub>2</sub>)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the electrolyte used in a Ni-MH battery?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '0.1M HCl', false),
  ((SELECT id FROM inserted_question), 'Lithium salt in an organic solvent', false),
  ((SELECT id FROM inserted_question), 'Aqueous Potassium Hydroxide (KOH)', true),
  ((SELECT id FROM inserted_question), 'Pure water', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In a Lithium-Manganese Dioxide (Li-MnO<sub>2</sub>) battery, what is the anode material?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Lithium metal', true),
  ((SELECT id FROM inserted_question), 'Manganese Dioxide (MnO<sub>2</sub>)', false),
  ((SELECT id FROM inserted_question), 'Graphite', false),
  ((SELECT id FROM inserted_question), 'Nickel', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a major advantage of Lithium batteries?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'They are the least expensive batteries to produce.', false),
  ((SELECT id FROM inserted_question), 'They are lightweight and have a high energy density.', true),
  ((SELECT id FROM inserted_question), 'They use a safe, water-based electrolyte.', false),
  ((SELECT id FROM inserted_question), 'They have a very short shelf life.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is a Fuel Cell?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A galvanic cell where chemical energy of a fuel is directly converted to electrical energy.', true),
  ((SELECT id FROM inserted_question), 'A rechargeable battery that uses lithium.', false),
  ((SELECT id FROM inserted_question), 'A device that burns fuel to create steam and turn a turbine.', false),
  ((SELECT id FROM inserted_question), 'A type of reference electrode.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'In an H<sub>2</sub>-O<sub>2</sub> fuel cell, what is the fuel?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Potassium Hydroxide (KOH)', false),
  ((SELECT id FROM inserted_question), 'Platinum', false),
  ((SELECT id FROM inserted_question), 'Hydrogen (H<sub>2</sub>)', true),
  ((SELECT id FROM inserted_question), 'Water (H<sub>2</sub>O)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('fds', 'What is the overall net reaction in an H<sub>2</sub>-O<sub>2</sub> fuel cell?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'O<sub>2(g)</sub> + 2H<sub>2</sub>O + 4e<sup>-</sup> &rarr; 4OH<sup>-</sup>', false),
  ((SELECT id FROM inserted_question), '2H<sub>2(g)</sub> + 4OH<sup>-</sup> &rarr; 4H<sub>2</sub>O + 4e<sup>-</sup>', false),
  ((SELECT id FROM inserted_question), '2H<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2H<sub>2</sub>O', true),
  ((SELECT id FROM inserted_question), 'Hg<sub>2</sub>Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Hg + 2Cl<sup>-</sup>', false);

-- ----------------------------------------
-- Data for subject: oop
-- ----------------------------------------

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you create an empty list in Python?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_list = {}', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the primary characteristic of a Python list?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'They are immutable (cannot be changed).', false),
  ((SELECT id FROM inserted_question), 'They are changeable (mutable) and allow duplicate values.', true),
  ((SELECT id FROM inserted_question), 'They do not allow duplicate values.', false),
  ((SELECT id FROM inserted_question), 'They must store items of the same data type.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Which method adds an element to the *end* of a list?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_list.insert(0, ''x'')', false),
  ((SELECT id FROM inserted_question), 'my_list.add(''x'')', false),
  ((SELECT id FROM inserted_question), 'my_list.append(''x'')', true),
  ((SELECT id FROM inserted_question), 'my_list.push(''x'')', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of this code: <code>my_list = [1, 2, 3]</code><br><code>my_list.insert(1, ''new'')</code><br><code>print(my_list)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you remove the item ''30'' from this list: <code>my_list = [10, 20, 30, 40]</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_list.pop(30)', false),
  ((SELECT id FROM inserted_question), 'my_list.delete(30)', false),
  ((SELECT id FROM inserted_question), 'my_list.remove(30)', true),
  ((SELECT id FROM inserted_question), 'my_list.pop(2)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of this code: <code>my_list = [10, 20, 30, 40]</code><br><code>my_list.pop(1)</code><br><code>print(my_list)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the key difference between <code>my_list.remove(x)</code> and <code>my_list.pop(i)</code>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '<code>remove</code> uses a value, <code>pop</code> uses an index.', true),
  ((SELECT id FROM inserted_question), '<code>remove</code> uses an index, <code>pop</code> uses a value.', false),
  ((SELECT id FROM inserted_question), '<code>remove</code> adds an item, <code>pop</code> removes one.', false),
  ((SELECT id FROM inserted_question), 'There is no difference.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_list = [3, 8, 1, 6]</code><br><code>print(my_list.index(1))</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '3', false),
  ((SELECT id FROM inserted_question), '8', false),
  ((SELECT id FROM inserted_question), '2', true),
  ((SELECT id FROM inserted_question), '1', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What does the <code>my_list.sort()</code> method do?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Sorts the list in descending order by default.', false),
  ((SELECT id FROM inserted_question), 'Returns a new, sorted copy of the list.', false),
  ((SELECT id FROM inserted_question), 'Sorts the list in ascending order *in-place*.', true),
  ((SELECT id FROM inserted_question), 'Reverses the order of the list.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>list1 = [1, 2]</code><br><code>list2 = [3, 4]</code><br><code>list1.extend(list2)</code><br><code>print(list1)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What does the <code>len()</code> function do?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Finds the largest number in a list.', false),
  ((SELECT id FROM inserted_question), 'Returns the number of items in an object.', true),
  ((SELECT id FROM inserted_question), 'Calculates the length of the variable name.', false),
  ((SELECT id FROM inserted_question), 'Sorts the list by length.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'In Python, list indices start at what number?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '1', false),
  ((SELECT id FROM inserted_question), '0', true),
  ((SELECT id FROM inserted_question), '-1', false),
  ((SELECT id FROM inserted_question), 'It depends on the list size.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_list = [''p'', ''r'', ''o'', ''b'', ''e'']</code><br><code>print(my_list[-1])</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '''p''', false),
  ((SELECT id FROM inserted_question), '''e''', true),
  ((SELECT id FROM inserted_question), 'An error will occur.', false),
  ((SELECT id FROM inserted_question), '''b''', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_list = [''C'', ''O'', ''M'', ''P'', ''U'', ''T'', ''E'', ''R'']</code><br><code>print(my_list[2:5])</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_list = [''C'', ''O'', ''M'', ''P'', ''U'']</code><br><code>print(my_list[:3])</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is a ''nested list''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A list that cannot be changed.', false),
  ((SELECT id FROM inserted_question), 'A list that has another list as an item.', true),
  ((SELECT id FROM inserted_question), 'A list that only contains strings.', false),
  ((SELECT id FROM inserted_question), 'A list that has been sorted.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the main difference between a Python list and a tuple?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Lists are immutable, tuples are mutable.', false),
  ((SELECT id FROM inserted_question), 'Lists are mutable, tuples are immutable (unchangeable).', true);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you create a tuple in Python?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_tuple = (1, ''Hello'', 3.4)</code><br><code>print(my_tuple[1])</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '1', false),
  ((SELECT id FROM inserted_question), '''Hello''', true),
  ((SELECT id FROM inserted_question), '3.4', false),
  ((SELECT id FROM inserted_question), 'An error will occur.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What happens if you try this code: <code>my_tuple = (1, 2, 3)</code><br><code>my_tuple[0] = 5</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The tuple becomes <code>(5, 2, 3)</code>.', false),
  ((SELECT id FROM inserted_question), 'It raises a <code>TypeError</code> because tuples are immutable.', true),
  ((SELECT id FROM inserted_question), 'The tuple becomes <code>(1, 2, 3, 5)</code>.', false),
  ((SELECT id FROM inserted_question), 'It raises an <code>IndexError</code>.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you correctly define a tuple with only *one* element, <code>''hello''</code>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 't = (''hello'')', false),
  ((SELECT id FROM inserted_question), 't = ''hello'',', false),
  ((SELECT id FROM inserted_question), 't = (''hello'',)', true),
  ((SELECT id FROM inserted_question), 't = {''hello''}', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>print((1, 2, 3) + (4, 5, 6))</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '(1, 2, 3, 4, 5, 6)', true),
  ((SELECT id FROM inserted_question), '(5, 7, 9)', false),
  ((SELECT id FROM inserted_question), '((1, 2, 3), (4, 5, 6))', false),
  ((SELECT id FROM inserted_question), 'An error will occur.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>print((''Repeat'',) * 3)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '(''RepeatRepeatRepeat'',)', false),
  ((SELECT id FROM inserted_question), '(''Repeat'', ''Repeat'', ''Repeat'')', true),
  ((SELECT id FROM inserted_question), 'An error will occur.', false),
  ((SELECT id FROM inserted_question), '(''Repeat'', 3)', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is ''Tuple Assignment''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Assigning a tuple as a key in a dictionary.', false),
  ((SELECT id FROM inserted_question), 'Assigning values from a tuple to a tuple of variables.', true),
  ((SELECT id FROM inserted_question), 'A function that creates a tuple.', false),
  ((SELECT id FROM inserted_question), 'Changing a value inside a tuple.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_tuple = (''a'', ''p'', ''p'', ''l'', ''e'')</code><br><code>print(''p'' in my_tuple)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'True', true),
  ((SELECT id FROM inserted_question), 'False', false),
  ((SELECT id FROM inserted_question), '1', false),
  ((SELECT id FROM inserted_question), 'An error will occur.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you delete an entire tuple named <code>my_tuple</code>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_tuple.clear()', false),
  ((SELECT id FROM inserted_question), 'my_tuple.remove_all()', false),
  ((SELECT id FROM inserted_question), 'del my_tuple', true),
  ((SELECT id FROM inserted_question), 'You cannot delete a tuple.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Which built-in function returns a tuple containing the quotient and remainder of a division?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'divmod()', true),
  ((SELECT id FROM inserted_question), 'divide()', false),
  ((SELECT id FROM inserted_question), 'modulus()', false),
  ((SELECT id FROM inserted_question), 'quotient()', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is a Python Set?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'An ordered collection that allows duplicates.', false),
  ((SELECT id FROM inserted_question), 'An unordered collection that has no duplicate elements.', true),
  ((SELECT id FROM inserted_question), 'A key-value pair collection.', false),
  ((SELECT id FROM inserted_question), 'An immutable (unchangeable) list.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you create an empty set?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_set = {}', false),
  ((SELECT id FROM inserted_question), 'my_set = set()', true),
  ((SELECT id FROM inserted_question), 'my_set = ()', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Why does <code>my_set = {}</code> not create an empty set?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It creates an empty tuple.', false),
  ((SELECT id FROM inserted_question), 'It creates an empty dictionary.', true),
  ((SELECT id FROM inserted_question), 'It creates an empty list.', false),
  ((SELECT id FROM inserted_question), 'It is invalid syntax.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_set = {11, 21, 11, 4, 5, 4}</code><br><code>print(my_set)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '{11, 21, 11, 4, 5, 4}', false),
  ((SELECT id FROM inserted_question), 'The output could be {4, 5, 11, 21} (or any order).', true);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What does it mean for a set to be ''unordered''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The items do not have a defined order and cannot be accessed by index.', true),
  ((SELECT id FROM inserted_question), 'The items are sorted in descending order.', false),
  ((SELECT id FROM inserted_question), 'You must sort the set before using it.', false),
  ((SELECT id FROM inserted_question), 'It cannot store numbers.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How are items stored in a Python dictionary?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'As an ordered sequence of values.', false),
  ((SELECT id FROM inserted_question), 'As key-value pairs.', true),
  ((SELECT id FROM inserted_question), 'As an unordered set of values.', false),
  ((SELECT id FROM inserted_question), 'As an immutable list of items.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is a valid dictionary key?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A list', false),
  ((SELECT id FROM inserted_question), 'A string or a number (immutable types).', true),
  ((SELECT id FROM inserted_question), 'Another dictionary', false),
  ((SELECT id FROM inserted_question), 'A set', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you access the value associated with the key ''age'' in <code>my_dict</code>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_dict.age', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What happens if you try to access a key that doesn''t exist using square brackets <code>[]</code>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It returns <code>None</code>.', false),
  ((SELECT id FROM inserted_question), 'It returns <code>0</code>.', false),
  ((SELECT id FROM inserted_question), 'It raises a <code>KeyError</code>.', true),
  ((SELECT id FROM inserted_question), 'It adds the key to the dictionary.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the safer way to get a value for a key that might not exist, which returns <code>None</code> instead of an error?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Using <code>my_dict.get(''key'')</code>', true),
  ((SELECT id FROM inserted_question), 'Using <code>my_dict.find(''key'')</code>', false),
  ((SELECT id FROM inserted_question), 'Using <code>my_dict.safe_get(''key'')</code>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What does this code do: <code>my_dict = {''name'': ''Jack'', ''age'': 26}</code><br><code>my_dict[''age''] = 27</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It adds a new key ''age'' with value 27.', false),
  ((SELECT id FROM inserted_question), 'It raises an error because ''age'' already exists.', false),
  ((SELECT id FROM inserted_question), 'It updates the existing value for the key ''age'' to 27.', true),
  ((SELECT id FROM inserted_question), 'It creates a new dictionary.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you add a new key-value pair <code>''address'': ''Downtown''</code> to <code>my_dict</code>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_dict.append(''address'', ''Downtown'')', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Which method removes an item with the provided key and *returns its value*?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Which method removes *all* items from a dictionary?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'del my_dict', false),
  ((SELECT id FROM inserted_question), 'my_dict.pop_all()', false),
  ((SELECT id FROM inserted_question), 'my_dict.clear()', true),
  ((SELECT id FROM inserted_question), 'my_dict.remove_all()', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_dict = {''b'': 2, ''a'': 1, ''c'': 3}</code><br><code>print(sorted(my_dict.keys()))</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
;

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'How do you iterate through both the keys and values of a dictionary?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'for k, v in my_dict.items():', true),
  ((SELECT id FROM inserted_question), 'for k in my_dict.keys():', false),
  ((SELECT id FROM inserted_question), 'for v in my_dict.values():', false),
  ((SELECT id FROM inserted_question), 'for i in my_dict:', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is a ''nested dictionary''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A dictionary with no items.', false),
  ((SELECT id FROM inserted_question), 'A dictionary that cannot be changed.', false),
  ((SELECT id FROM inserted_question), 'A dictionary that is stored inside another dictionary.', true),
  ((SELECT id FROM inserted_question), 'A dictionary that uses lists as keys.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Which method returns a *list* of all values in a dictionary?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_dict.keys()', false),
  ((SELECT id FROM inserted_question), 'my_dict.values()', true),
  ((SELECT id FROM inserted_question), 'my_dict.items()', false),
  ((SELECT id FROM inserted_question), 'my_dict.get_values()', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'Which method returns a list of tuples, where each tuple is a (key, value) pair?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'my_dict.keys()', false),
  ((SELECT id FROM inserted_question), 'my_dict.values()', false),
  ((SELECT id FROM inserted_question), 'my_dict.items()', true),
  ((SELECT id FROM inserted_question), 'my_dict.pairs()', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is a key difference between a list and a dictionary?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Lists are ordered and accessed by a numeric index, while dictionaries are unordered (in older Python) key-value maps.', true),
  ((SELECT id FROM inserted_question), 'Lists are for numbers, dictionaries are for strings.', false),
  ((SELECT id FROM inserted_question), 'Lists are mutable, dictionaries are immutable.', false),
  ((SELECT id FROM inserted_question), 'Lists can have duplicates, dictionaries cannot.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_dict = {1: ''a'', 2: ''b''}</code><br><code>print(1 in my_dict)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'True', true),
  ((SELECT id FROM inserted_question), 'False', false),
  ((SELECT id FROM inserted_question), '''a''', false),
  ((SELECT id FROM inserted_question), 'An error will occur.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'What is the output of: <code>my_dict = {1: ''a'', 2: ''b''}</code><br><code>print(''a'' in my_dict)</code>')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'True', false),
  ((SELECT id FROM inserted_question), 'False', true),
  ((SELECT id FROM inserted_question), '1', false),
  ((SELECT id FROM inserted_question), 'An error will occur.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('oop', 'The dictionary membership test (using the `in` keyword) checks for the presence of...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Keys only.', true),
  ((SELECT id FROM inserted_question), 'Values only.', false),
  ((SELECT id FROM inserted_question), 'Both keys and values.', false),
  ((SELECT id FROM inserted_question), 'The index of the item.', false);

-- ----------------------------------------
-- Data for subject: math
-- ----------------------------------------

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If A<b>v</b> = &lambda;<b>v</b> for a non-zero vector <b>v</b>, what is <b>v</b> called?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'An eigenvalue', false),
  ((SELECT id FROM inserted_question), 'An eigenvector', true),
  ((SELECT id FROM inserted_question), 'The characteristic vector', false),
  ((SELECT id FROM inserted_question), 'A null vector', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If A<b>v</b> = &lambda;<b>v</b> for a non-zero vector <b>v</b>, what is &lambda; called?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'An eigenvalue', true),
  ((SELECT id FROM inserted_question), 'An eigenvector', false),
  ((SELECT id FROM inserted_question), 'The determinant', false),
  ((SELECT id FROM inserted_question), 'The trace', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'What is the characteristic equation used to find the eigenvalues (&lambda;) of a square matrix A?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A<b>v</b> = &lambda;<b>v</b>', false),
  ((SELECT id FROM inserted_question), 'det(A - &lambda;I) = 0', true),
  ((SELECT id FROM inserted_question), 'det(A) = 0', false),
  ((SELECT id FROM inserted_question), 'A = PDP<sup>-1</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The eigenvalues of a diagonal matrix are...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Always zero.', false),
  ((SELECT id FROM inserted_question), 'The elements on its main diagonal.', true),
  ((SELECT id FROM inserted_question), 'Always 1.', false),
  ((SELECT id FROM inserted_question), 'The elements of its first row.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The eigenvalues of an upper triangular matrix are...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The elements on its main diagonal.', true),
  ((SELECT id FROM inserted_question), 'The sum of the diagonal elements.', false),
  ((SELECT id FROM inserted_question), 'Always zero.', false),
  ((SELECT id FROM inserted_question), 'The elements of its last column.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If &lambda; is an eigenvalue of an invertible matrix A, what is an eigenvalue of A<sup>-1</sup>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '&lambda;', false),
  ((SELECT id FROM inserted_question), '-&lambda;', false),
  ((SELECT id FROM inserted_question), '1 / &lambda;', true),
  ((SELECT id FROM inserted_question), '&lambda;<sup>2</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'Find the eigenvalues of the matrix: A = [row 1: 2, 0; row 2: 0, 3]')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '2 and 3', true),
  ((SELECT id FROM inserted_question), '0 and 2', false),
  ((SELECT id FROM inserted_question), '0 and 3', false),
  ((SELECT id FROM inserted_question), '2 and 0', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The sum of the eigenvalues of a matrix is equal to its...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Determinant', false),
  ((SELECT id FROM inserted_question), 'Rank', false),
  ((SELECT id FROM inserted_question), 'Trace', true),
  ((SELECT id FROM inserted_question), 'Inverse', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The product of the eigenvalues of a matrix is equal to its...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Determinant', true),
  ((SELECT id FROM inserted_question), 'Rank', false),
  ((SELECT id FROM inserted_question), 'Trace', false),
  ((SELECT id FROM inserted_question), 'Signature', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'An eigenvector <b>v</b> cannot be...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A vector of all ones.', false),
  ((SELECT id FROM inserted_question), 'A zero vector.', true),
  ((SELECT id FROM inserted_question), 'A column vector.', false),
  ((SELECT id FROM inserted_question), 'A vector with negative entries.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If a 2x2 matrix has eigenvalues 4 and 5, what is its determinant?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '9', false),
  ((SELECT id FROM inserted_question), '1', false),
  ((SELECT id FROM inserted_question), '20', true),
  ((SELECT id FROM inserted_question), 'Cannot be determined', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If a 2x2 matrix has eigenvalues 4 and 5, what is its trace?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '9', true),
  ((SELECT id FROM inserted_question), '1', false),
  ((SELECT id FROM inserted_question), '20', false),
  ((SELECT id FROM inserted_question), 'Cannot be determined', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'How are eigenvectors <b>v</b> for an eigenvalue &lambda; found?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'By solving (A - &lambda;I)<b>v</b> = <b>0</b>', true),
  ((SELECT id FROM inserted_question), 'By solving A<b>v</b> = <b>0</b>', false),
  ((SELECT id FROM inserted_question), 'By finding the determinant of A', false),
  ((SELECT id FROM inserted_question), 'By inverting the matrix A', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If a matrix has an eigenvalue of 0, what does this imply about the matrix?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The matrix is invertible.', false),
  ((SELECT id FROM inserted_question), 'The matrix is singular (not invertible).', true),
  ((SELECT id FROM inserted_question), 'The matrix is symmetric.', false),
  ((SELECT id FROM inserted_question), 'All other eigenvalues are also 0.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If &lambda; is an eigenvalue of A, what is an eigenvalue of A<sup>3</sup>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '3&lambda;', false),
  ((SELECT id FROM inserted_question), '&lambda; + 3', false),
  ((SELECT id FROM inserted_question), '&lambda;<sup>3</sup>', true),
  ((SELECT id FROM inserted_question), 'Cannot be determined', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'What does the Cayley-Hamilton Theorem state?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Every square matrix is diagonalizable.', false),
  ((SELECT id FROM inserted_question), 'Every square matrix satisfies its own characteristic equation.', true),
  ((SELECT id FROM inserted_question), 'A matrix''s determinant is the product of its eigenvalues.', false),
  ((SELECT id FROM inserted_question), 'A matrix is invertible if its determinant is non-zero.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If the characteristic equation of A is &lambda;<sup>2</sup> - 4&lambda; + 3 = 0, what equation is true by Cayley-Hamilton?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A<sup>2</sup> - 4A + 3I = 0', true),
  ((SELECT id FROM inserted_question), 'A<sup>2</sup> - 4A = 3', false),
  ((SELECT id FROM inserted_question), 'A - 4I = 0', false),
  ((SELECT id FROM inserted_question), 'A = (4A - 3I)<sup>1/2</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The Cayley-Hamilton theorem can be used to find...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Only the eigenvalues of a matrix.', false),
  ((SELECT id FROM inserted_question), 'The inverse of a matrix (e.g., A<sup>-1</sup>).', true),
  ((SELECT id FROM inserted_question), 'Only the eigenvectors of a matrix.', false),
  ((SELECT id FROM inserted_question), 'The rank of a matrix.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'For A = [row 1: 1, 2; row 2: 3, 4], the characteristic equation is &lambda;<sup>2</sup> - 5&lambda; - 2 = 0. What is A<sup>2</sup> - 5A - 2I?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The identity matrix, I', false),
  ((SELECT id FROM inserted_question), 'The matrix A itself', false),
  ((SELECT id FROM inserted_question), 'The zero matrix, 0', true),
  ((SELECT id FROM inserted_question), 'The inverse matrix, A<sup>-1</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'According to Cayley-Hamilton, p(A) = 0, where p(&lambda;) is the...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Characteristic polynomial of A', true),
  ((SELECT id FROM inserted_question), 'Null space of A', false),
  ((SELECT id FROM inserted_question), 'Rank of A', false),
  ((SELECT id FROM inserted_question), 'Trace of A', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If A is invertible and A<sup>2</sup> + 3A + 2I = 0, what is A<sup>-1</sup>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A<sup>2</sup> + 3A', false),
  ((SELECT id FROM inserted_question), '(-1/2)(A + 3I)', true),
  ((SELECT id FROM inserted_question), 'A + 3I', false),
  ((SELECT id FROM inserted_question), 'It cannot be found.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'Can the Cayley-Hamilton theorem be used for non-square matrices?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Yes, always.', false),
  ((SELECT id FROM inserted_question), 'No, it applies only to square matrices.', true),
  ((SELECT id FROM inserted_question), 'Only if they have a non-zero determinant.', false),
  ((SELECT id FROM inserted_question), 'Only if they are symmetric.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If A = [row 1: 2, 0; row 2: 0, 2], its characteristic equation is (&lambda;-2)<sup>2</sup> = 0. What is (A-2I)<sup>2</sup>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A', false),
  ((SELECT id FROM inserted_question), 'I', false),
  ((SELECT id FROM inserted_question), '0 (the zero matrix)', true),
  ((SELECT id FROM inserted_question), 'A<sup>-1</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The Cayley-Hamilton theorem is useful for calculating...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The square root of a matrix.', false),
  ((SELECT id FROM inserted_question), 'High powers of a matrix (e.g., A<sup>100</sup>).', true),
  ((SELECT id FROM inserted_question), 'The logarithm of a matrix.', false),
  ((SELECT id FROM inserted_question), 'The singular values of a matrix.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If p(&lambda;) = &lambda;<sup>3</sup> + 2&lambda; - 5I = 0 is the characteristic equation for A, what is A<sup>3</sup>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A<sup>3</sup> = -2A + 5I', true),
  ((SELECT id FROM inserted_question), 'A<sup>3</sup> = 2A - 5I', false),
  ((SELECT id FROM inserted_question), 'A<sup>3</sup> = 5I - 2A<sup>2</sup>', false),
  ((SELECT id FROM inserted_question), 'A<sup>3</sup> = 0', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A matrix A is diagonalizable if it can be written as...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A = P + D + P<sup>-1</sup>', false),
  ((SELECT id FROM inserted_question), 'A = PDP<sup>-1</sup>', true),
  ((SELECT id FROM inserted_question), 'A = P + D', false),
  ((SELECT id FROM inserted_question), 'A = P D P<sup>T</sup>', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'In the diagonalization formula A = PDP<sup>-1</sup>, what is D?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A diagonal matrix of eigenvectors.', false),
  ((SELECT id FROM inserted_question), 'A diagonal matrix of eigenvalues.', true),
  ((SELECT id FROM inserted_question), 'An invertible matrix.', false),
  ((SELECT id FROM inserted_question), 'An orthogonal matrix.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'In the diagonalization formula A = PDP<sup>-1</sup>, what is P?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A matrix whose columns are the eigenvalues.', false),
  ((SELECT id FROM inserted_question), 'A matrix whose rows are the eigenvectors.', false),
  ((SELECT id FROM inserted_question), 'A matrix whose columns are the linearly independent eigenvectors.', true),
  ((SELECT id FROM inserted_question), 'A diagonal matrix.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'An $n \\times n$ matrix $A$ is diagonalizable if and only if it has $n$ linearly independent...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Eigenvalues', false),
  ((SELECT id FROM inserted_question), 'Eigenvectors', true),
  ((SELECT id FROM inserted_question), 'Rows', false),
  ((SELECT id FROM inserted_question), 'Pivots', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If an $n \\times n$ matrix has $n$ distinct (different) eigenvalues, it is...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Guaranteed to be diagonalizable.', true),
  ((SELECT id FROM inserted_question), 'Never diagonalizable.', false),
  ((SELECT id FROM inserted_question), 'Guaranteed to be singular.', false),
  ((SELECT id FROM inserted_question), 'Guaranteed to be symmetric.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'Is the matrix A = [row 1: 1, 1; row 2: 0, 1] diagonalizable?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Yes, because it is 2x2.', false),
  ((SELECT id FROM inserted_question), 'No, because it only has one eigenvalue (1) but not two linearly independent eigenvectors.', true),
  ((SELECT id FROM inserted_question), 'Yes, because its determinant is 1.', false),
  ((SELECT id FROM inserted_question), 'No, because it is not symmetric.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'What is a key property of real symmetric matrices regarding diagonalization?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'They are never diagonalizable.', false),
  ((SELECT id FROM inserted_question), 'They are always orthogonally diagonalizable.', true),
  ((SELECT id FROM inserted_question), 'Their eigenvalues are always complex.', false),
  ((SELECT id FROM inserted_question), 'They only have one eigenvector.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'Diagonalization is very useful for what purpose?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Calculating the inverse of a matrix.', false),
  ((SELECT id FROM inserted_question), 'Solving systems of linear equations.', false),
  ((SELECT id FROM inserted_question), 'Quickly computing high powers of a matrix (e.g., A<sup>k</sup>).', true),
  ((SELECT id FROM inserted_question), 'Finding the trace of a matrix.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If A = PDP<sup>-1</sup>, what is A<sup>k</sup>?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A<sup>k</sup> = P<sup>k</sup> D<sup>k</sup> (P<sup>-1</sup>)<sup>k</sup>', false),
  ((SELECT id FROM inserted_question), 'A<sup>k</sup> = P D<sup>k</sup> P<sup>-1</sup>', true),
  ((SELECT id FROM inserted_question), 'A<sup>k</sup> = P D P<sup>-k</sup>', false),
  ((SELECT id FROM inserted_question), 'A<sup>k</sup> = (PDP<sup>-1</sup>) + k', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If a matrix is diagonalizable, the diagonal entries of D are the...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Eigenvalues of A', true),
  ((SELECT id FROM inserted_question), 'Eigenvectors of A', false),
  ((SELECT id FROM inserted_question), 'Pivots of A', false),
  ((SELECT id FROM inserted_question), 'Always 1', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A quadratic form is a polynomial in which all terms are of degree...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'One', false),
  ((SELECT id FROM inserted_question), 'Two', true),
  ((SELECT id FROM inserted_question), 'Three', false),
  ((SELECT id FROM inserted_question), 'Any degree', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The matrix $A$ associated with a quadratic form <b>x</b><sup>T</sup>A<b>x</b> must be...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Invertible', false),
  ((SELECT id FROM inserted_question), 'Diagonal', false),
  ((SELECT id FROM inserted_question), 'Symmetric', true),
  ((SELECT id FROM inserted_question), 'Orthogonal', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A square matrix $P$ is called an orthogonal matrix if...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'P = P<sup>T</sup> (Symmetric)', false),
  ((SELECT id FROM inserted_question), 'P<sup>T</sup> = P<sup>-1</sup> (Transpose equals inverse)', true),
  ((SELECT id FROM inserted_question), 'P = -P<sup>T</sup> (Skew-symmetric)', false),
  ((SELECT id FROM inserted_question), 'Its determinant is 0.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If $P$ is an orthogonal matrix, what is $P^{-1}$?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'P<sup>T</sup>', true),
  ((SELECT id FROM inserted_question), 'P', false),
  ((SELECT id FROM inserted_question), 'I', false),
  ((SELECT id FROM inserted_question), '-P', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'If $P$ is an orthogonal matrix, what is its determinant?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), '0', false),
  ((SELECT id FROM inserted_question), '1 or -1', true),
  ((SELECT id FROM inserted_question), 'Always 1', false),
  ((SELECT id FROM inserted_question), 'Greater than 1', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'An orthogonal transformation <b>x</b> = P<b>y</b> reduces a quadratic form to a...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Sum of squares (canonical form)', true),
  ((SELECT id FROM inserted_question), 'Zero matrix', false),
  ((SELECT id FROM inserted_question), 'Matrix with no eigenvalues', false),
  ((SELECT id FROM inserted_question), 'Singular matrix', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The ''canonical form'' (or conical form) of a quadratic form contains no...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Squared terms', false),
  ((SELECT id FROM inserted_question), 'Cross-product terms (e.g., x<sub>1</sub>x<sub>2</sub>)', true),
  ((SELECT id FROM inserted_question), 'Eigenvalues', false),
  ((SELECT id FROM inserted_question), 'Diagonal terms', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A quadratic form is ''positive definite'' if...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'All its eigenvalues are negative.', false),
  ((SELECT id FROM inserted_question), 'All its eigenvalues are positive.', true),
  ((SELECT id FROM inserted_question), 'All its eigenvalues are zero.', false),
  ((SELECT id FROM inserted_question), 'All its eigenvalues are non-negative (&ge; 0).', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A quadratic form is ''positive semi-definite'' if...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'All its eigenvalues are positive (> 0).', false),
  ((SELECT id FROM inserted_question), 'All its eigenvalues are non-negative (&ge; 0).', true),
  ((SELECT id FROM inserted_question), 'All its eigenvalues are negative (< 0).', false),
  ((SELECT id FROM inserted_question), 'All its eigenvalues are zero.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The transformation that reduces a quadratic form to its canonical form is...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A linear transformation', false),
  ((SELECT id FROM inserted_question), 'An orthogonal transformation', true),
  ((SELECT id FROM inserted_question), 'A singular transformation', false),
  ((SELECT id FROM inserted_question), 'A zero transformation', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A set of vectors {<b>v</b><sub>1</sub>, <b>v</b><sub>2</sub>, ..., <b>v</b><sub>k</sub>} is an ''orthogonal system'' if...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'All vectors are parallel.', false),
  ((SELECT id FROM inserted_question), 'The dot product of any two *different* vectors is zero.', true),
  ((SELECT id FROM inserted_question), 'All vectors have a magnitude of 1.', false),
  ((SELECT id FROM inserted_question), 'The sum of the vectors is zero.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'A set of orthogonal vectors is...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Always linearly dependent.', false),
  ((SELECT id FROM inserted_question), 'Always linearly independent (if non-zero).', true),
  ((SELECT id FROM inserted_question), 'Always a basis for R<sup>n</sup>.', false),
  ((SELECT id FROM inserted_question), 'Always contains the zero vector.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'What does Sylvester''s Law of Inertia state is invariant (unchanged) under a non-singular linear transformation?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The eigenvalues.', false),
  ((SELECT id FROM inserted_question), 'The eigenvectors.', false),
  ((SELECT id FROM inserted_question), 'The number of positive, negative, and zero terms (the signature).', true),
  ((SELECT id FROM inserted_question), 'The determinant.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'The ''signature'' of a quadratic form refers to...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The determinant of its matrix.', false),
  ((SELECT id FROM inserted_question), 'The pair of numbers (index, rank).', true),
  ((SELECT id FROM inserted_question), 'The set of all its eigenvalues.', false),
  ((SELECT id FROM inserted_question), 'The trace of its matrix.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('math', 'In Sylvester''s Law, the ''index'' of a quadratic form is the number of...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Positive terms in its canonical form.', true),
  ((SELECT id FROM inserted_question), 'Negative terms in its canonical form.', false),
  ((SELECT id FROM inserted_question), 'Zero terms in its canonical form.', false),
  ((SELECT id FROM inserted_question), 'Total terms in its canonical form.', false);

-- ----------------------------------------
-- Data for subject: iot
-- ----------------------------------------

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is Requirements Engineering?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The process of writing code for a system.', false),
  ((SELECT id FROM inserted_question), 'The broad spectrum of tasks that lead to an understanding of requirements.', true),
  ((SELECT id FROM inserted_question), 'The process of testing and debugging software.', false),
  ((SELECT id FROM inserted_question), 'The act of designing the system''s architecture.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Requirements engineering builds a bridge to which two activities?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Communication and Planning', false),
  ((SELECT id FROM inserted_question), 'Design and Construction', true),
  ((SELECT id FROM inserted_question), 'Testing and Deployment', false),
  ((SELECT id FROM inserted_question), 'Inception and Elicitation', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which of the following is NOT one of the seven distinct tasks of requirements engineering?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Elicitation', false),
  ((SELECT id FROM inserted_question), 'Negotiation', false),
  ((SELECT id FROM inserted_question), 'Coding', true),
  ((SELECT id FROM inserted_question), 'Validation', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'When does a project typically begin?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'When the design is complete.', false),
  ((SELECT id FROM inserted_question), 'When a business need is identified.', true),
  ((SELECT id FROM inserted_question), 'When the first line of code is written.', false),
  ((SELECT id FROM inserted_question), 'When the validation task starts.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the goal of the ''Inception'' task?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To write the final software specification.', false),
  ((SELECT id FROM inserted_question), 'To establish a basic understanding of the problem and the desired solution.', true),
  ((SELECT id FROM inserted_question), 'To test the completed software.', false),
  ((SELECT id FROM inserted_question), 'To negotiate the cost and timeline.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which of the following is a type of feasibility study mentioned in the text?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Cultural Feasibility', false),
  ((SELECT id FROM inserted_question), 'Economic Feasibility', true),
  ((SELECT id FROM inserted_question), 'Modular Feasibility', false),
  ((SELECT id FROM inserted_question), 'Design Feasibility', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'The ''Elicitation'' task primarily involves...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Asking the customer about the system objectives and what is to be accomplished.', true),
  ((SELECT id FROM inserted_question), 'Writing the code for the user interface.', false),
  ((SELECT id FROM inserted_question), 'Debugging the requirements model.', false),
  ((SELECT id FROM inserted_question), 'Creating a final, written contract.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'When a customer is not completely sure of what is needed, this is known as a problem of:')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Scope', false),
  ((SELECT id FROM inserted_question), 'Volatility', false),
  ((SELECT id FROM inserted_question), 'Understanding', true),
  ((SELECT id FROM inserted_question), 'Negotiation', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'When ''the requirements change over time'', this is known as a problem of:')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Scope', false),
  ((SELECT id FROM inserted_question), 'Volatility', true),
  ((SELECT id FROM inserted_question), 'Understanding', false),
  ((SELECT id FROM inserted_question), 'Elaboration', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the main purpose of the ''Elaboration'' task?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To get initial project funding.', false),
  ((SELECT id FROM inserted_question), 'To expand and refine the information obtained during inception and elicitation.', true),
  ((SELECT id FROM inserted_question), 'To define the final project deadlines.', false),
  ((SELECT id FROM inserted_question), 'To test the final product.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Elaboration is driven by the creation and refinement of what?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Legal contracts', false),
  ((SELECT id FROM inserted_question), 'User scenarios', true),
  ((SELECT id FROM inserted_question), 'Marketing plans', false),
  ((SELECT id FROM inserted_question), 'Hardware specifications', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'The ''Negotiation'' task is required to reconcile...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Different programming languages.', false),
  ((SELECT id FROM inserted_question), 'Conflicting requirements from different stakeholders.', true),
  ((SELECT id FROM inserted_question), 'Errors in the code.', false),
  ((SELECT id FROM inserted_question), 'Hardware and software compatibility.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'The best negotiations strive for what kind of result?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A ''win-lose'' result where the developer wins.', false),
  ((SELECT id FROM inserted_question), 'A ''win-win'' result for all stakeholders.', true),
  ((SELECT id FROM inserted_question), 'A ''lose-lose'' result to ensure compromise.', false),
  ((SELECT id FROM inserted_question), 'A result where the customer gets everything they asked for.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'According to the text, a ''Specification'' can be a...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Written document, a set of graphical models, or a prototype.', true),
  ((SELECT id FROM inserted_question), 'Meeting agenda only.', false),
  ((SELECT id FROM inserted_question), 'Test plan only.', false),
  ((SELECT id FROM inserted_question), 'List of developers on the team.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'The ''Validation'' phase focuses on what activity?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Gathering initial ideas.', false),
  ((SELECT id FROM inserted_question), 'Checking for errors and debugging the requirements.', true),
  ((SELECT id FROM inserted_question), 'Hiring the development team.', false),
  ((SELECT id FROM inserted_question), 'Negotiating the budget.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is ''Requirements Management''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The task of managing the project''s budget.', false),
  ((SELECT id FROM inserted_question), 'The set of activities for identifying, controlling, and tracking requirements.', true),
  ((SELECT id FROM inserted_question), 'The process of managing the software developers.', false),
  ((SELECT id FROM inserted_question), 'The act of writing the user manual.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is a ''Stakeholder''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Only the person paying for the project.', false),
  ((SELECT id FROM inserted_question), 'Only the end-users of the system.', false),
  ((SELECT id FROM inserted_question), 'Anyone who benefits in a direct or indirect way from the system.', true),
  ((SELECT id FROM inserted_question), 'Only the software engineers on the team.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which of the following is an example of a stakeholder?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A competitor''s CEO', false),
  ((SELECT id FROM inserted_question), 'Business operations managers', true),
  ((SELECT id FROM inserted_question), 'A university professor', false),
  ((SELECT id FROM inserted_question), 'A random person on the street', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Why is it important to recognize ''Multiple Viewpoints''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Because requirements may be inconsistent or conflict with one another.', true),
  ((SELECT id FROM inserted_question), 'Because it proves the project is too complicated.', false),
  ((SELECT id FROM inserted_question), 'Because it helps decide which programming language to use.', false),
  ((SELECT id FROM inserted_question), 'Because it is a legal requirement.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the job of a requirements engineer regarding collaboration?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To always side with the customer.', false),
  ((SELECT id FROM inserted_question), 'To identify areas of commonality and areas of conflict.', true),
  ((SELECT id FROM inserted_question), 'To ignore all stakeholders and build their own vision.', false),
  ((SELECT id FROM inserted_question), 'To choose the cheapest requirements.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', '''Who will use the solution?'' and ''What will be the economic benefit?'' are examples of what?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Final validation questions.', false),
  ((SELECT id FROM inserted_question), 'Test cases.', false),
  ((SELECT id FROM inserted_question), 'The ''first questions'' asked during inception.', true),
  ((SELECT id FROM inserted_question), 'Non-functional requirements.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the goal of ''Collaborative Requirements Gathering''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To identify the problem, propose solutions, and negotiate requirements in a team setting.', true),
  ((SELECT id FROM inserted_question), 'To have a formal meeting where developers present the final product.', false),
  ((SELECT id FROM inserted_question), 'To write the entire user manual in one session.', false),
  ((SELECT id FROM inserted_question), 'To let the customer and developer work in complete isolation.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'A ''facilitator'' is often used to control meetings in which elicitation technique?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Collaborative Requirements Gathering', true),
  ((SELECT id FROM inserted_question), 'Validation', false),
  ((SELECT id FROM inserted_question), 'Inception', false),
  ((SELECT id FROM inserted_question), 'Specification', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is another name for a ''Usage Scenario''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A State Diagram', false),
  ((SELECT id FROM inserted_question), 'A ''Use-Case'' or ''user story''', true),
  ((SELECT id FROM inserted_question), 'A Feasibility Study', false),
  ((SELECT id FROM inserted_question), 'A Class Diagram', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'A ''bounded statement of scope'' is what kind of work product?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A design work product', false),
  ((SELECT id FROM inserted_question), 'A testing work product', false),
  ((SELECT id FROM inserted_question), 'An elicitation work product', true),
  ((SELECT id FROM inserted_question), 'A management work product', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What does a ''Use Case'' capture?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A contract describing the system''s behavior in response to a request.', true),
  ((SELECT id FROM inserted_question), 'The developer''s name and salary.', false),
  ((SELECT id FROM inserted_question), 'A list of all bugs in the code.', false),
  ((SELECT id FROM inserted_question), 'The hardware specifications required to run the system.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'A use case depicts the software from which point of view?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The developer''s', false),
  ((SELECT id FROM inserted_question), 'The end user''s', true),
  ((SELECT id FROM inserted_question), 'The project manager''s', false),
  ((SELECT id FROM inserted_question), 'The database''s', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the first step in writing a use case?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Define the set of ''actors''.', true),
  ((SELECT id FROM inserted_question), 'Draw the graphical model.', false),
  ((SELECT id FROM inserted_question), 'Write the test case.', false),
  ((SELECT id FROM inserted_question), 'Choose the programming language.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'In a use case, what is an ''Actor''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The developer writing the code.', false),
  ((SELECT id FROM inserted_question), 'A person or device that uses the system.', true),
  ((SELECT id FROM inserted_question), 'A type of data diagram.', false),
  ((SELECT id FROM inserted_question), 'A software bug.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is a ''Primary Actor''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'An actor that supports the system so others can work.', false),
  ((SELECT id FROM inserted_question), 'An actor that works directly and frequently with the software.', true),
  ((SELECT id FROM inserted_question), 'The main developer on the project.', false),
  ((SELECT id FROM inserted_question), 'The stakeholder with the most money.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is a ''Secondary Actor''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'An actor that supports the system so that primary actors can do their work.', true),
  ((SELECT id FROM inserted_question), 'An actor that works directly with the software.', false),
  ((SELECT id FROM inserted_question), 'The end-user.', false),
  ((SELECT id FROM inserted_question), 'The customer.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the intent of the ''Analysis Model'' (Requirements Model)?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To be a static, unchanging contract.', false),
  ((SELECT id FROM inserted_question), 'To provide a description of the required informational, functional, and behavioral domains.', true),
  ((SELECT id FROM inserted_question), 'To list all the developers on the team.', false),
  ((SELECT id FROM inserted_question), 'To be the final user manual.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which element of the requirements model is described from the user’s point of view?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Class-based elements', false),
  ((SELECT id FROM inserted_question), 'Behavioral elements', false),
  ((SELECT id FROM inserted_question), 'Flow-oriented elements', false),
  ((SELECT id FROM inserted_question), 'Scenario-based elements', true);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Class-based elements categorize objects that have similar attributes and common...?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Behaviors', true),
  ((SELECT id FROM inserted_question), 'Use cases', false),
  ((SELECT id FROM inserted_question), 'Flows', false),
  ((SELECT id FROM inserted_question), 'Data sources', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What does a ''State Diagram'' represent?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The flow of data through a system.', false),
  ((SELECT id FROM inserted_question), 'The behavior of a system by depicting its states and the events that cause state changes.', true),
  ((SELECT id FROM inserted_question), 'The classes and their relationships.', false),
  ((SELECT id FROM inserted_question), 'The scenarios of user interaction.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'In a state diagram, what is a ''state''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Any externally observable mode of behavior.', true),
  ((SELECT id FROM inserted_question), 'A piece of data.', false),
  ((SELECT id FROM inserted_question), 'A function or method.', false),
  ((SELECT id FROM inserted_question), 'A user.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which element type deals with how information is transformed as it flows through a system?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Flow-oriented elements', true),
  ((SELECT id FROM inserted_question), 'Behavioral elements', false),
  ((SELECT id FROM inserted_question), 'Class-based elements', false),
  ((SELECT id FROM inserted_question), 'Scenario-based elements', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'A Data Flow Diagram (DFD) is an example of which type of requirements model element?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Class-based', false),
  ((SELECT id FROM inserted_question), 'Behavioral', false),
  ((SELECT id FROM inserted_question), 'Flow-oriented', true),
  ((SELECT id FROM inserted_question), 'Scenario-based', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is an ''Analysis Pattern''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A bug that reoccurs in the code.', false),
  ((SELECT id FROM inserted_question), 'A solution for a problem that reoccurs across projects in a specific domain.', true),
  ((SELECT id FROM inserted_question), 'A standard template for a specification document.', false),
  ((SELECT id FROM inserted_question), 'A diagram showing the flow of data.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is the purpose of ''Validating Requirements''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'To check the model for inconsistency, omissions, and ambiguity.', true),
  ((SELECT id FROM inserted_question), 'To write the code.', false),
  ((SELECT id FROM inserted_question), 'To hire the team.', false),
  ((SELECT id FROM inserted_question), 'To gather the initial requirements.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'A validation review asks if a requirement is ''testable''. What does this mean?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Can it be understood by the customer?', false),
  ((SELECT id FROM inserted_question), 'Can a test be created to prove that the requirement is met?', true),
  ((SELECT id FROM inserted_question), 'Is the requirement necessary?', false),
  ((SELECT id FROM inserted_question), 'Is the requirement from a valid source?', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is a ''Functional Requirement''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'It defines ''how'' the system should operate (e.g., performance).', false),
  ((SELECT id FROM inserted_question), 'It defines the specific features and operations the system must perform (e.g., user login).', true),
  ((SELECT id FROM inserted_question), 'It defines the project''s budget.', false),
  ((SELECT id FROM inserted_question), 'It defines the timeline for the project.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', '''User authentication'' and ''report generation'' are examples of what?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Functional requirements', true),
  ((SELECT id FROM inserted_question), 'Non-functional requirements', false),
  ((SELECT id FROM inserted_question), 'Analysis patterns', false),
  ((SELECT id FROM inserted_question), 'Feasibility studies', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'What is a ''Non-functional Requirement''?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'A requirement that is not important.', false),
  ((SELECT id FROM inserted_question), 'It defines ''how'' the system should operate (e.g., performance, security).', true),
  ((SELECT id FROM inserted_question), 'It defines a specific feature, like a button.', false),
  ((SELECT id FROM inserted_question), 'It is an optional requirement.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', '''Performance'', ''security'', and ''usability'' are examples of what?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Functional requirements', false),
  ((SELECT id FROM inserted_question), 'Non-functional requirements', true),
  ((SELECT id FROM inserted_question), 'Use cases', false),
  ((SELECT id FROM inserted_question), 'Actors', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which task involves ''expanding and refining'' information from inception and elicitation?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Validation', false),
  ((SELECT id FROM inserted_question), 'Negotiation', false),
  ((SELECT id FROM inserted_question), 'Elaboration', true),
  ((SELECT id FROM inserted_question), 'Specification', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', '''Problems of scope'' mean that the system boundary is...')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'perfectly defined.', false),
  ((SELECT id FROM inserted_question), 'ill-defined or unclear.', true),
  ((SELECT id FROM inserted_question), 'constantly changing.', false),
  ((SELECT id FROM inserted_question), 'too small.', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', '''Technical Feasibility'' and ''Economic Feasibility'' are part of what?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'The Feasibility Study', true),
  ((SELECT id FROM inserted_question), 'The Specification Document', false),
  ((SELECT id FROM inserted_question), 'The Validation Check', false),
  ((SELECT id FROM inserted_question), 'The Use Case Model', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'Which task involves ''identifying, controlling, tracking, and establishing'' requirements?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Inception', false),
  ((SELECT id FROM inserted_question), 'Elicitation', false),
  ((SELECT id FROM inserted_question), 'Requirements Management', true),
  ((SELECT id FROM inserted_question), 'Negotiation', false);

WITH inserted_question AS (
  INSERT INTO questions (subject, question)
  VALUES ('iot', 'A ''Software specification'' can be a written document, graphical models, or a...?')
  RETURNING id
)
INSERT INTO options (question_id, option_text, is_correct) VALUES
  ((SELECT id FROM inserted_question), 'Prototype', true),
  ((SELECT id FROM inserted_question), 'Final bill', false),
  ((SELECT id FROM inserted_question), 'List of developers', false),
  ((SELECT id FROM inserted_question), 'Meeting agenda', false);

