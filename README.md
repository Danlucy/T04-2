# Television Energy Efficiency Dataset Analysis

## About the Data
This project uses the **Energy Rating for Household Appliances** dataset, specifically the **Labelled Products: Televisions** resource, published on [data.gov.au](https://data.gov.au/data/dataset/energy-rating-for-household-appliances/resource/93a615e5-935e-4713-a4b0-379e3f6dedc9).  
The dataset contains information about televisions available in the Australian market, including:
- Brand and model numbers  
- Screen sizes and screen area  
- Screen technology (LCD, LED, OLED, etc.)  
- Star ratings and Star Rating Index (efficiency measure)  
- Power consumption values (standby, active, average mode)  
- Availability and expiry dates of registrations  

This dataset is maintained by the Australian Government to provide transparency into appliance energy performance.

## Data Processing
The dataset was processed using **KNIME Analytics Platform**. The workflow included the following steps:

1. **CSV Reader** – Imported the dataset.  
2. **Column Filter** – Removed columns that were almost entirely missing (e.g. GrandDate) and other fields that could not be reliably inferred (e.g. Product Website, Representative Brand).  
3. **Rule Engine** – Extracted Family Name from Model Number where appropriate.  
4. **Duplicate Row Filter** – Removed duplicate entries by ensuring Submit ID and Registration Number remained unique.  
5. **String Manipulation** – Standardized brand categories by cleaning alphabet cases and handling nicknames.  
6. **Cell Splitter** – Split expiry dates into year, month, and day values for filtering.  
7. **Row Filter** – Removed records with expiry dates before 2025-09-20.  
8. **Row Filter (availability)** – Removed products marked as Unavailable.  
9. **Column Filter** – Removed additional unnecessary or irrelevant fields.  

## Privacy
The dataset does not contain personal information. It is limited to product and manufacturer details that are already publicly available through regulatory filings. As such, there are no privacy concerns associated with its use.

## Accuracy and Limitations
- The dataset originates from the official Australian Government appliance energy rating database, but errors or inconsistencies may still exist due to reporting practices by manufacturers.  
- Some fields contain missing or inconsistent values which required cleaning and filtering.  
- Screen size and area are reported as provided by manufacturers and may not always exactly match real-world physical measurements.  
- Energy consumption values are measured under standardized test conditions and may differ from consumer usage patterns.  

## Ethics
This analysis is intended for educational and research purposes only. The dataset is publicly available and does not include sensitive or personally identifiable information. Care has been taken to represent the data fairly, avoid introducing bias during cleaning, and acknowledge the dataset’s limitations. The results should not be interpreted as a definitive ranking of manufacturers or models but as a data-driven exploration of energy efficiency trends.  

## AI Declaration
The project report, documentation, and parts of the data cleaning workflow description were written with assistance from **Generative AI (ChatGPT, OpenAI)**. The AI was used to support explanation, summarization, and drafting of documentation. Final decisions on data preparation, analysis, and interpretation were made by the author.  
