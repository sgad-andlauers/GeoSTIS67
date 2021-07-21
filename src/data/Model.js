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
        label:"Responsable"
    },
    {
        id: 2,
        label:"Gestionnaire"
    },
    {
        id:3,
        label:"Membre"
    }
];
export const Cie = 
[
    {
        nom: "CIE Bruche/Mossig",
        idTable: 134000
    },
    { 
        nom: "CIE Piemont/Ried",
        idTable: 134001
    },
    {
        nom: "CIE Sud EMS",
        idTable: 134002
    },
    {
        nom: "CIE Centre EMS",
        idTable: 134003
    },
    {
        nom: "CIE Nord EMS",
        idTable: 134004
    },
    {
        nom: "CIE Lauter/Moder",
        idTable: 134005
    },
    {
        nom: "CIE Sarre/Zorn",
        idTable: 134006
    }
];
export const Champs = 
[
    {
        id:1,
        champ: "Nom",
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
        nom:"Petit",
        prenom:"Patrice",
        email:"patrice.petit@sdis67.com",
        lastLogin:"21-06-2021",
        status:"actif",
        fonction: 1
    },
    {
        id: 2,
        nom:"Dupin",
        prenom:"Maxime",
        email:"maxime.dupin@sdis67.com",
        lastLogin:"21-06-2021",
        status:"actif",
        fonction: 1
    },
    {
        id:3,
        nom:"Huck",
        prenom:"Alain",
        email:"alain.huck@sdis67.com",
        lastLogin:"21-06-2021",
        status:"actif",
        fonction: 2
    },
    {
        id:4,
        nom:"Colobert",
        prenom:"Mathieu",
        email:"mathieu.colobert@sdis67.com",
        lastLogin:"21-06-2021",
        status:"inactif",
        fonction: 2
    },
    {
        id:5,
        nom:"Ratelli",
        prenom:"Luc",
        email:"luc.ratelli@sdis67.com",
        lastLogin:"21-06-2021",
        status:"actif",
        fonction: 3
    },
    {
        id:6,
        nom:"Andlauer",
        prenom:"Sébastien",
        email:"sebastien.andlauer@sdis67.com",
        lastLogin:"21-06-2021",
        status:"actif",
        fonction: 3
    }
]