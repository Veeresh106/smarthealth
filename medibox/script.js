function getMedicine() {
    const disease = document.getElementById("disease").value;
    let medicine;
         switch (disease) {
                 case "Cold":
                     medicine = "Paracetamol, Antihistamines, Decongestants";
                     break;
                case "Fever":
                     medicine="paracetamol,dolo 650";
                     break;
                case "Flu":
                     medicine = "Tamiflu, Ibuprofen, Rest and Hydration";
                     break;
                case "Headache":
                     medicine = "Ibuprofen, Acetaminophen, Aspirin";
                     break;
                case "Diabetes":
                     medicine = "Metformin, Insulin, Glipizide";
                     break;
                case "night blindness":
                      medicine= "inlazer ayurvedic";
                     break;
                case "anemia":
                     medicine="ferrous sulphate";
                     break;
                case "aniexty":
                     medicine= "alprazolam,temazepam";
                     break;
                case "asthma":
                     medicine= "montelukast,zafirlukast,zileuton";
                     break;
                case "hypersomnia":
                     mediine= "sodium oxybate,clarithromycim";
                     break;
                case "sleep walking":
                     medicine= "estazolam,klonopin,oleptro";
                     break;
                case "stomachahes":
                     medicine= "hyoscinebutyl bromide,simethicone,magnesium hydroxide";
                     break;
                case "chickenpok":
                     medicine= "acyclobir(zovirax sitavig)";
                     break;
                case "alergies":
                     medicine= "cepirizine,bromphenir amine,claripin-d";
                     break;
                case "body pains":
                     medicine= "acetaminophen,aspiran,norphine,tramadol";
                     break;
                case "throatt pain":
                     medicine= "diuprofem";
                     break;
                case "thyroid":
                     medicine= "levothyroxine";
                     break;
                case "cough":
                     medicine= "delsym cough+chestcongestion,azithromycin";
                     break;
                case "sinus":
                      medicine= "amoxocillin,azithromycin dose pack,prednisone";
                    break;  
                default:
                  medicine = "Consult a doctor for the best recommendation.";
             }
        

    // Open a new window to display the medicine recommendation
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Medicine Recommendation</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    text-align: center; 
                    padding: 20px; 
                    background-image: url('medico.jpg'); 
                    background-size: cover;
                }
                h1 { 
                    color: #007BFF; 
                    font-size: 24px; 
                }
                p { 
                    font-size: 18px; 
                    color: #333; 
                }
                .container {
                    background: rgba(255, 255, 255, 0.8);
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    display: inline-block;
                    margin-top: 50px;
                }
                button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Medicine Recommendation</h1>
                <p><strong>Disease:</strong> ${disease}</p>
                <p><strong>Recommended Medicine:</strong> ${medicine}</p>
                <button onclick="window.close()">Close</button>
            </div>
        </body>
        </html>
    `);
}
