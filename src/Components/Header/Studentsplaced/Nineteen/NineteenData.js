const studentsPlacedData = [
    {
      sno: 1,
      name: "VANAPALLI THIRUMALA TILAK",
      rollnumber: "15VV1A0501",
      branch: "CSE",
      passingyear: "2018-2019",
      campus: "On Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 2,
      name: "SAMAPATHI AKHILA PREETHI",
      rollnumber: "15VV1A0502",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 3,
      name: "T KRISHNA SRAVANTHI",
      rollnumber: "15VV1A0503",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 4,
      name: "NUNABARTHI NEERAJA PRIYA",
      rollnumber: "15VV1A0504",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 5,
      name: "AMALAPURAPU PREETHI",
      rollnumber: "15VV1A0505",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 6,
      name: "NIKITHA SOWMAYA KONDAPALLI",
      rollnumber: "15VV1A0506",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 7,
      name: "RAMAPURAM MANI DEEP",
      rollnumber: "15VV1A0508",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 8,
      name: "KAGITHA GOPI",
      rollnumber: "15VV1A0510",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 9,
      name: "AKKAPATRUNI RAJEEVSAI",
      rollnumber: "15VV1A0511",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Virtusa"
    },
    {
      sno: 10,
      name: "DANGETI JAYA SWARNA JYOTHI",
      rollnumber: "15VV1A0512",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 11,
      name: "VEMULA MANI KUMAR",
      rollnumber: "15VV1A0513",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 12,
      name: "MEDANKI NAVYASRI",
      rollnumber: "15VV1A0515",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 13,
      name: "SHAIK ASLAM BASHA",
      rollnumber: "15VV1A0516",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Agilitx"
    },
    {
      sno: 14,
      name: "INTI VENKATA SUBBA RAO",
      rollnumber: "15VV1A0517",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 15,
      name: "SUSHMA INDUPURI",
      rollnumber: "15VV1A0518",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 16,
      name: "SANAGANA VAMSI PRASANTH",
      rollnumber: "15VV1A0520",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Wipro"
    },
    {
      sno: 17,
      name: "VALLISETTI NIKHIL KUMAR",
      rollnumber: "15VV1A0523",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Hyundai Mobis"
    },
    {
      sno: 18,
      name: "SOWMYA LAHARI VAJRALA",
      rollnumber: "15VV1A0524",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 19,
      name: "NIMMAKURI HARSH BHARATH",
      rollnumber: "15VV1A0525",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Infosys"
    },
    {
      sno: 20,
      name: "KAKARAPARTHI SAI VASANTH",
      rollnumber: "15VV1A0528",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Hyundai Mobis"
    },
    {
      sno: 21,
      name: "TELAPUDI KRISHNA SRAVANTHI",
      rollnumber: "15VV1A0529",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 22,
      name: "NEELAM RAJU NANDINI",
      rollnumber: "15VV1A0530",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 23,
      name: "AVANIGADDA AKHILA",
      rollnumber: "15VV1A0531",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 24,
      name: "BULUSU SWETHA",
      rollnumber: "15VV1A0534",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 25,
      name: "MARADANA JHANSI MANI",
      rollnumber: "15VV1A0536",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Global Logic"
    },
    {
      sno: 26,
      name: "KILLARI VASAVI",
      rollnumber: "15VV1A0537",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 27,
      name: "UBBALA SARITHA",
      rollnumber: "15VV1A0539",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 28,
      name: "BALLA ANEETH BABU",
      rollnumber: "15VV1A0540",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Virtusa"
    },
    {
      sno: 29,
      name: "SWETA KALANADHABHATLA",
      rollnumber: "15VV1A0541",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "CGI"
    },
    {
      sno: 30,
      name: "VARRE ROHINI SAMANVITHA",
      rollnumber: "15VV1A0543",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 31,
      name: "KIKKURU SARATH CHANDRA REDD",
      rollnumber: "15VV1A0545",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Infosys"
    },
    {
      sno: 32,
      name: "DOGGA VENKATA SIVA KUMAR",
      rollnumber: "15VV1A0546",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tavisca"
    },
    {
      sno: 33,
      name: "AKULA TEJASWINI SAI",
      rollnumber: "15VV1A0548",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 34,
      name: "MOKA HARSHA VARDHAN",
      rollnumber: "15VV1A0550",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Agilitx"
    },
    {
      sno: 35,
      name: "SEELAM SAI RAMA CHANDRA VASU",
      rollnumber: "15VV1A0552",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 36,
      name: "ACHAMTA DURGA GOWRI SANKAR",
      rollnumber: "15VV1A0565",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Hyundai Mobis"
    },
    {
      sno: 37,
      name: "JAGANNADHAM KUMARI",
      rollnumber: "16VV5A0564",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 38,
      name: "ACHANTA DURGA GOWRI SANKAR",
      rollnumber: "16VV5A0565",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Hyundai Mobis"
    },
    {
      sno: 39,
      name: "KHANAM ZUBEDA",
      rollnumber: "16VV5A0566",
      branch: "CSE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 40,
      name: "DUGGIRALA PAVANI",
      rollnumber: "15VV1A1224",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 41,
      name: "GANTA PRUDVI",
      rollnumber: "15VV1A1240",
      branch: "IT",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "APGVB"
    },
    {
      sno: 42,
      name: "MAJJI AYYAPPA",
      rollnumber: "15VV1A1206",
      branch: "IT",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Axtria"
    },
    {
      sno: 43,
      name: "M.GOPI KRISHNA ABHISHEK",
      rollnumber: "15VV1A1230",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 44,
      name: "B.MANOGZNA",
      rollnumber: "15VV1A1256",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 45,
      name: "D.PAVANI",
      rollnumber: "15VV1A1224",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 46,
      name: "K.SAI SRINIVAS",
      rollnumber: "15VV1A1227",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 47,
      name: "M.SHABBIR KHASIM KHAN",
      rollnumber: "15VV1A1241",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 48,
      name: "A.JAGADISH SAI",
      rollnumber: "15VV1A1207",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 49,
      name: "M.VINAY KUMAR",
      rollnumber: "15VV1A1208",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 50,
      name: "K.LAKSHMI MANASA",
      rollnumber: "15VV1A1226",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 51,
      name: "K.SAISRINIVAS",
      rollnumber: "15VV1A1227",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 52,
      name: "M.GOPI KRISHNA ABHISHEK",
      rollnumber: "15VV1A1230",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 53,
      name: "M.SHABBIR KHASIM KHAN",
      rollnumber: "15VV1A1241",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 54,
      name: "A.LAKSHMI PUJA",
      rollnumber: "15VV1A1243",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 55,
      name: "V.SHALINI",
      rollnumber: "15VV1A1250",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 56,
      name: "B.MANOGZNA",
      rollnumber: "15VV1A1256",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 57,
      name: "A.CHARISHMA",
      rollnumber: "15VV1A1257",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 58,
      name: "M.SHABBIR KHASIM KHAN",
      rollnumber: "15VV1A1241",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Hyundai Mobis"
    },
    {
      sno: 59,
      name: "K.JAYA SRIDEVI SATYA",
      rollnumber: "15VV1A1237",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Efftronics"
    },
    {
      sno: 60,
      name: "A.GNANA TEJASWINI",
      rollnumber: "15VV1A1211",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Efftronics"
    },
    {
      sno: 61,
      name: "M.BHARGAVI",
      rollnumber: "15VV1A1209",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Efftronics"
    },
    {
      sno: 62,
      name: "K.JAYA SRIDEVI SATYA",
      rollnumber: "15VV1A1237",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 63,
      name: "KOTIPLLI JAYA SRIDEVI SATYA",
      rollnumber: "15VV1A1237",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Infosys"
    },
    {
      sno: 64,
      name: "M.SATYA AKHIL",
      rollnumber: "15VV1A1202",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 65,
      name: "M.BHARGAVI",
      rollnumber: "15VV1A1209",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 66,
      name: "M.BHAVESH DUTT",
      rollnumber: "15VV1A1222",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 67,
      name: "K.LAKSHMI MANASA",
      rollnumber: "15VV1A1226",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 68,
      name: "S.VAMSI KRISHNA",
      rollnumber: "15VV1A1231",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 69,
      name: "K.LOKESHWAR",
      rollnumber: "15VV1A1235",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 70,
      name: "K.JAYA SRIDEVI SATYA",
      rollnumber: "15VV1A1237",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 71,
      name: "M.SHABBIR KHASIM KHAN",
      rollnumber: "15VV1A1241",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 72,
      name: "M.LIKHITH",
      rollnumber: "15VV1A1242",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 73,
      name: "Y.JAGADEESH TARUN SAI",
      rollnumber: "15VV1A1245",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 74,
      name: "B.V.JYOTHIKA",
      rollnumber: "15VV1A1248",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 75,
      name: "A.AYYAPPA",
      rollnumber: "15VV1A1206",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Global Logic"
    },
    {
      sno: 76,
      name: "MYLA BHAVESH DUTT",
      rollnumber: "15VV1A1222",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 77,
      name: "SEVA ANUPAM",
      rollnumber: "15VV1A1246",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 78,
      name: "MANIKONDA BHARGAVI",
      rollnumber: "15VV1A1209",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 79,
      name: "AKKIDASARI PAVAN KUMAR",
      rollnumber: "15VV1A1238",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 80,
      name: "GUNTREDDI SANDEEP YUGANDHAR",
      rollnumber: "15VV1A1228",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 81,
      name: "K.LAKSHMI MANASA",
      rollnumber: "15VV1A1226",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Zebi"
    },
    {
      sno: 82,
      name: "K.JAYA SRI DEVI SATYA",
      rollnumber: "15VV1A1237",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Zebi"
    },
    {
      sno: 83,
      name: "B.MANOGZNA",
      rollnumber: "15VV1A1256",
      branch: "IT",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Zebi"
    },
    {
      sno: 84,
      name: "MARELLA LAKSHMI SRAVYA",
      rollnumber: "15VV1A0423",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cerium Systems"
    },
    {
      sno: 85,
      name: "TADI RAVITEJA",
      rollnumber: "15VV1A0433",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 86,
      name: "MEESALA HEMA LATHA",
      rollnumber: "15VV1A0408",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 87,
      name: "CHINTA LAKSHMI PRASANN",
      rollnumber: "16VV5A0464",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 88,
      name: "KONATHALA SUSHMA",
      rollnumber: "15VV1A0402",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Infosys"
    },
    {
      sno: 89,
      name: "VELPURI VAMSI KRISHNA",
      rollnumber: "15VV1A0443",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 90,
      name: "M VENKATA SHIVA AKHIL",
      rollnumber: "15VV1A0416",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 91,
      name: "K UDAYA PRABHA KIRAN",
      rollnumber: "15VV1A0430",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 92,
      name: "M SHAHID AFRIDI",
      rollnumber: "15VV1A0441",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 93,
      name: "V BHARATH KUMAR",
      rollnumber: "15VV1A0444",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 94,
      name: "V NAGA VENKATA SAI RAM",
      rollnumber: "15VV1A0415",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 95,
      name: "PALLEM ARAVIND",
      rollnumber: "16VV5AO463",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 96,
      name: "KOLUSU MOHANA DURGA R",
      rollnumber: "15VV1A0442",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 97,
      name: "MOHAMMED AMEEN",
      rollnumber: "15VV1A0437",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 98,
      name: "B.MALLIKA",
      rollnumber: "16VV5A0465",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Panchaythi Raj"
    },
    {
      sno: 99,
      name: "SRIVENI UKKUSURI",
      rollnumber: "15VV1A0409",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 100,
      name: "MIDDE CHANDANA SWAMY",
      rollnumber: "15VV1A0439",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Panchayt Secretary"
    },
    {
      sno: 101,
      name: "ROOPA LAVANYA RAYAPURAM",
      rollnumber: "16VV5A0462",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Veda/Loi/Et"
    },
    {
      sno: 102,
      name: "NAGA SAI JHARI NANDIGAM",
      rollnumber: "16VV5A0461",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Soctronics Technologies Pvt.Ltd"
    },
    {
      sno: 103,
      name: "A.ANURAGH",
      rollnumber: "15VV1A0405",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Miracle Software Solutions"
    },
    {
      sno: 104,
      name: "U.PAVANI",
      rollnumber: "15VV1A0438",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Panchayt Secretary"
    },
    {
      sno: 105,
      name: "HEMA",
      rollnumber: "16VV5A0461",
      branch: "ECE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Huawe"
    },
    {
      sno: 106,
      name: "GUNDA BHARGAV NAIDU",
      rollnumber: "15VV1A0207",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Innerve"
    },
    {
      sno: 107,
      name: "RAJAMAHENDRAVARAPU SATYA KIRANMAYI",
      rollnumber: "15VV1A0209",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 108,
      name: "YERRA CHANDRAKALA",
      rollnumber: "15VV1A0214",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 109,
      name: "PAPPU BHAVANI BHARGAV RAJ",
      rollnumber: "15VV1A0223",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 110,
      name: "DEVENDRA SRI SURYA TEJA GONGADA",
      rollnumber: "15VV1A0229",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 111,
      name: "VATTAM VENUMADHAVI",
      rollnumber: "15VV1A0233",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 112,
      name: "SHAIK AFROZ",
      rollnumber: "15VV1A0243",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Sachivalayam"
    },
    {
      sno: 113,
      name: "PALATI SIVA SURYA SAI VENKATA RAMESH",
      rollnumber: "15VV1A0246",
      branch: "EEE",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 114,
      name: "B.KIRANMAYE",
      rollnumber: "15VV1A0124",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 115,
      name: "N.RATNA KUMARI",
      rollnumber: "15VV1A0125",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 116,
      name: "M. BHARATHI",
      rollnumber: "15VV1A0104",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 117,
      name: "P.INDREEJA",
      rollnumber: "15VV1A0114",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 118,
      name: "K.VAMSI PRASANTH",
      rollnumber: "15VV1A0121",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 119,
      name: "A SURYA TEJA",
      rollnumber: "15VV1A0103",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 120,
      name: "B. SAI KRISHNA",
      rollnumber: "15VV1A0117",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 121,
      name: "A PRANEETHA",
      rollnumber: "15VV1A0106",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt Eng Asst"
    },
    {
      sno: 122,
      name: "S.NIHARIKA",
      rollnumber: "15VV1A0102",
      branch: "CIVIL",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "AP Govt (VRO)"
    },
    {
      sno: 123,
      name: "RAYILA CHANDRASEKHARA RAO",
      rollnumber: "15VV1A0305",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 124,
      name: "ANNEPU GEETHA",
      rollnumber: "15VV1A0307",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Amazon"
    },
    {
      sno: 125,
      name: "KOTA ARUNMAI",
      rollnumber: "15VV1A0310",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 126,
      name: "GANDEPALLI GEETHIKA",
      rollnumber: "15VV1A0313",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Ward Amenities Secretary"
    },
    {
      sno: 127,
      name: "MINDI CHAITANYA SAI LAKSHMI",
      rollnumber: "15VV1A0314",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 128,
      name: "ADLA RAJESH",
      rollnumber: "15VV1A0325",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 129,
      name: "DAMARLA YASWANTH KUMAR",
      rollnumber: "15VV1A0326",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 130,
      name: "GONNABHAKTULA TULASI BHAVANI",
      rollnumber: "15VV1A0327",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 131,
      name: "PURRI SAI JYOTHI",
      rollnumber: "15VV1A0329",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Panchayat Secretary"
    },
    {
      sno: 132,
      name: "VASAMSETTY LEELA LAVANYA",
      rollnumber: "15VV1A0332",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 133,
      name: "BUDDALA VENKATA SRI VYSHNAVI",
      rollnumber: "15VV1A0333",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "IOAG"
    },
    {
      sno: 134,
      name: "NANDAM NIHARIKA",
      rollnumber: "15VV1A0334",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 135,
      name: "KANDERI DURGA BRAHMINI",
      rollnumber: "15VV1A0336",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 136,
      name: "JUTTUKA VAMSI KRISHNA",
      rollnumber: "15VV1A0338",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "On Campus",
      company: "Infosys"
    },
    {
      sno: 137,
      name: "INTI SUPRAJA",
      rollnumber: "15VV1A0344",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Ward Amenities Secretary"
    },
    {
      sno: 138,
      name: "PENUMARTI BHANU MEGHANA",
      rollnumber: "15VV1A0345",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Mahila Police and Women & Child Welfare Assistant"
    },
    {
      sno: 139,
      name: "KAVURU NAVEENA",
      rollnumber: "15VV1A0346",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 140,
      name: "TARAPATLA SAMATHA",
      rollnumber: "15VV1A0347",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Ward Amenities Secretary"
    },
    {
      sno: 141,
      name: "KEERTHI PREM KALYAN",
      rollnumber: "15VV1A0352",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 142,
      name: "GURUGUBELLI YAMUNA",
      rollnumber: "15VV1A0357",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 143,
      name: "NODAGALA SATISH",
      rollnumber: "16VV5A0361",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Engineer Assistant"
    },
    {
      sno: 144,
      name: "ANDE LAVANYA",
      rollnumber: "16VV5A0362",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Kone"
    },
    {
      sno: 145,
      name: "TARRA AJAY KUMAR",
      rollnumber: "16VV5A0363",
      branch: "MECH",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Senior Technical Assistant DRDO"
    },
    {
      sno: 146,
      name: "JAGANNADHAM JAYA PADMA",
      rollnumber: "15VV1A3104",
      branch: "MET",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Daiki Aluminum Industry India Pvt.Ltd"
    },
    {
      sno: 147,
      name: "KANNIDI VANDANA",
      rollnumber: "15VV1A3122",
      branch: "MET",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Daiki Aluminum Industry India Pvt.Ltd"
    },
    {
      sno: 148,
      name: "AJMEERA ANIL KUMAR NAYAK",
      rollnumber: "15VV1A3124",
      branch: "MET",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "RINL-Vskp"
    },
    {
      sno: 149,
      name: "CHENNA HANISH SAI VARDHAN",
      rollnumber: "15VV1A3125",
      branch: "MET",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "RINL-Vskp"
    },
    {
      sno: 150,
      name: "KANAKAM KASI VENKATA DURGA MANIKANTA",
      rollnumber: "15VV1A3111",
      branch: "MET",
      passingyear: "2018-19",
      campus: "Off Campus",
      company: "Bureau Veritas"
    },
  ];
  
  export default studentsPlacedData;
  