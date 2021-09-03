export const Permissions = 
[
    {
        id: 1,
        Note: 0,
        code_name:"non chargé"
    },
    {
        id: 2,
        Note: 1,
        code_name:"Télécharger"
    },
    {
        id: 3,
        Note: 2,
        code_name:"Lecture"
    },
    {
        id: 4,
        Note: 4,
        code_name:"Modifier"
    },
    {
        id: 5,
        Note: 8,
        code_name:"Créer"
    },
    {
        id: 6,
        Note: 16,
        code_name:"Supprimer"
    },
    {
        id: 7,
        Note: 32,
        code_name:"importante"
    },
    {
        id: 8,
        Note: 64,
        code_name:"requise"
    }
];   
export const Roles = 
[
    {
        id:1,
        label:"L1"
    },
    {
        id: 2,
        label:"L2"
    },
    {
        id:3,
        label:"L3"
    },
    {
        id:4,
        label:"L4"
    },
    {
        id:5,
        label:"L5"
    }
];
export const Fonctions = 
[
    {
        id:1,
        label:"non définit"
    },
    {
        id:2,
        label:"Responsable"
    },
    {
        id: 3,
        label:"Gestionnaire"
    },
    {
        id:4,
        label:"Membre"
    }
];
export const Cie = 
[
    {
        lastName: "CIE Bruche/Mossig",
        id: 134000
    },
    { 
        lastName: "CIE Piemont/Ried",
        id: 134001
    },
    {
        lastName: "CIE Sud EMS",
        id: 134002
    },
    {
        lastName: "CIE Centre EMS",
        id: 134003
    },
    {
        lastName: "CIE Nord EMS",
        id: 134004
    },
    {
        lastName: "CIE Lauter/Moder",
        id: 134005
    },
    {
        lastName: "CIE Sarre/Zorn",
        id: 134006
    }
];
export const Champs = 
[
    {
        id:1,
        champ: "lastName",
        id_app: 3
    },
    {
        id:2,
        champ: "Adresse",
        id_app: 3
    },
    {
        id:3,
        champ: "Secteur",
        id_app: 1
    },
    {
        id:4,
        champ: "Nb pers. op.",
        id_app: 1
    }
];
export const Groupes = [
    {
        id:1,
        nom: "collectivité europénne d'Alsace",
        nature: "Unité organisationnel",
        zone: 1,
        parentId: null,
        fonction: "",
        membre: 8,
        level: 7,
        subgroup:[2, 3, 4, 5, 6, 7]
    },
    {
        id:2,
        nom: "Stis67",
        nature: "Unité organisationnel",
        zone: 2,
        parentId: 1,
        fonction:"",
        membre: 20,
        level: 6,
        subgroup:[8, 4 ,5 ,6 ,7]
    },
    {
        id: 3,
        nom: "PCUO",
        nature: "Groupe",
        zone: 2,
        parentId: 2,
        fonction:"",
        membre: 15,
        level: 5,
        subgroup:[4, 5, 6, 7]
    },
    {
        id: 4,
        nom: "CTA-CDIS",
        nature: "Unité organisationnel",
        zone: 2,
        parentId: 3,
        fonction:"",
        membre: 11,
        level: 4,
        subgroup:[]
    },
    {
        id: 5,
        nom: "CIE Molsheim",
        nature: "Unité organisationnel",
        zone: 134000,
        parentId: 3,
        fonction:"",
        membre: 12,
        level: 3,
        subgroup:[6, 7]
    },
    {
        id: 6,
        nom: "Ut Molsheim",
        nature: "Unité organisationnel",
        zone: 134001,
        parentId: 5,
        fonction:"",
        membre: 12,
        level: 2,
        subgroup:[7]
    },
    {
    id: 7,
    nom: "Section Molsheim",
    nature: "Unité organisationnel",
    zone: 67300,
    parentId: 6,
    fonction:"",
    membre: 12,
    level:1,
    subgroup:[]
    },
   
];
export const Users = 
[
    {
        id: 1,
        lastName: "Petit",
        firstName: "Patrice",
        email:"patrice.petit@sdis67.com",
        last_login:"21-06-2021",
        status:true,
        userName: "01000",
        matricule: 11000,
        fonction: 1
    },
    {
        id: 2,
        lastName:"Dupin",
        firstName:"Maxime",
        email:"maxime.dupin@sdis67.com",
        lastLogin:"21-06-2021",
        userName: "02000",
        matricule: 12000,
        status:true,
        fonction: 1
    },
    {
        id:3,
        lastName:"Huck",
        firstName:"Alain",
        email:"alain.huck@sdis67.com",
        lastLogin:"21-06-2021",
        userName: "03000",
        matricule: 13000,
        status:true,
        fonction: 1
    },
    {
        id:4,
        lastName:"Colobert",
        firstName:"Mathieu",
        email:"mathieu.colobert@sdis67.com",
        lastLogin:"21-06-2021",
        userName: "04000",
        matricule: 14000,
        status:false,
        fonction: 1
    },
    {
        id:5,
        lastName:"Ratelli",
        firstName:"Luc",
        email:"luc.ratelli@sdis67.com",
        lastLogin:"21-06-2021",
        userName: "05000",
        matricule: 15000,
        status:true,
        fonction: 1
    },
    {
        id:6,
        lastName:"Andlauer",
        firstName:"Sébastien",
        email:"sebastien.andlauer@sdis67.com",
        lastLogin:"21-06-2021",
        userName: "06000",
        matricule: 16000,
        status:true,
        fonction: 1
    }
]