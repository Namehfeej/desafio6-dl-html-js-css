//Code for prints the names for each user.   

    //Item 1.

    const titleTask6 = console.log(document.getElementById('title-task6').innerHTML);


    //Item 2.
    
    const namesDd = document.querySelectorAll('dd');
    //console.log(namesDd); 

    const name1User1 = namesDd[0].outerText;
    const name2User1 = namesDd[1].outerText;
    const lastName1User1 = namesDd[2].outerText.toUpperCase();
    const lastName2User1 = namesDd[3].outerText.toUpperCase();

    const name1User2 = namesDd[4].outerText;
    const name2User2 = namesDd[5].outerText;
    const lastName1User2 = namesDd[6].outerText.toUpperCase();
    const lastName2User2 = namesDd[7].outerText.toUpperCase();

    /*
    for (let i = 0; i < namesDd.length; i++) {
        let namesUsers = namesDd[i].outerText;
        console.log(namesUsers);
        let keyNames = namesUsers.length;
        concat(namesUsers)
    }
    */
     
    function fullNameValuesToConsole(FullNameValueToConsole) {
        FullNameValueToConsole = "-----\nIntegrante 1: " + name1User1 + " " + name2User1 + " " + lastName1User1 + " " + lastName2User1 + "\n" + "Integrante 2: " + name1User2 + " " + name2User2 + " " + lastName1User2 + " " + lastName2User2 + "\n" + "-----";
        console.log(FullNameValueToConsole);
    }

    function fullNameValuesToConsoleNotSecondNameUser1(FullNameValueToConsole) {
        FullNameValueToConsole = "-----\nIntegrante 1: " + name1User1 + name2User1 + " " + lastName1User1 + " " + lastName2User1 + "\n" + "Integrante 2: " + name1User2 + " " + name2User2 + " " + lastName1User2 + " " + lastName2User2 + "\n" + "-----";
        console.log(FullNameValueToConsole);
    }

    function fullNameValuesToConsoleNotSecondNameUser2(FullNameValueToConsole) {
        FullNameValueToConsole = "-----\nIntegrante 1: " + name1User1 + " " + name2User1 + " " + lastName1User1 + " " + lastName2User1 + "\n" + "Integrante 2: " + name1User2 + name2User2 + " " + lastName1User2 + " " + lastName2User2 + "\n" + "-----";
        console.log(FullNameValueToConsole);
    }

    function fullNameValuesToConsoleNotSecondNamesUsers(FullNameValueToConsole) {
        FullNameValueToConsole = "-----\nIntegrante 1: " + name1User1 + name2User1 + " " + lastName1User1 + " " + lastName2User1 + "\n" + "Integrante 2: " + name1User2 + name2User2 + " " + lastName1User2 + " " + lastName2User2 + "\n" + "-----";
        console.log(FullNameValueToConsole);
    }

    
    let FullNameValueToConsole = "";


    if (name2User1.length === 0) {
        fullNameValuesToConsoleNotSecondNameUser1();
    } else if (name2User2.length === 0){
        fullNameValuesToConsoleNotSecondNameUser2();
    } else if (name2User1.length === 0 && name2User2.length === 0) {
        fullNameValuesToConsoleNotSecondNamesUsers();
    } else {
        fullNameValuesToConsole();
    }
   

if(name1User1 === name1User2) {
        //Prompt for color name.
        const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

        let promptNameText = promptNameColor;
        

        if(promptNameText === 'rojo') {

            const name1User1Value = document.getElementById('name1-user1');
            const name1User1AtributteColor = document.createAttribute("class");

            name1User1AtributteColor.value = "name-color-red";
            name1User1Value.setAttributeNode(name1User1AtributteColor);

            const name1User2Value = document.getElementById('name1-user2');
            const name1User2AtributteColor = document.createAttribute("class");

            name1User2AtributteColor.value = "name-color-blue";
            name1User2Value.setAttributeNode(name1User2AtributteColor);

            confirmAction();
            
        } else if (promptNameText === 'azul') {

            const name1User1Value = document.getElementById('name1-user1');
            const name1User1AtributteColor = document.createAttribute("class");

            name1User1AtributteColor.value = "name-color-blue";
            name1User1Value.setAttributeNode(name1User1AtributteColor);

            const name1User2Value = document.getElementById('name1-user2');
            const name1User2AtributteColor = document.createAttribute("class");

            name1User2AtributteColor.value = "name-color-red";
            name1User2Value.setAttributeNode(name1User2AtributteColor);

            confirmAction();
    } 
} else if(name2User1 === name1User2) {
    //Prompt for color name.
    const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

    let promptNameText = promptNameColor;
    

    if(promptNameText === 'rojo') {

        const name2User1Value = document.getElementById('name2-user1');
        const name2User1AtributteColor = document.createAttribute("class");

        name2User1AtributteColor.value = "name-color-red";
        name2User1Value.setAttributeNode(name2User1AtributteColor);

        const name1User2Value = document.getElementById('name1-user2');
        const name1User2AtributteColor = document.createAttribute("class");

        name1User2AtributteColor.value = "name-color-blue";
        name1User2Value.setAttributeNode(name1User2AtributteColor);

        confirmAction();
        
    } else if (promptNameText === 'azul') {

        const name2User1Value = document.getElementById('name2-user1');
        const name2User1AtributteColor = document.createAttribute("class");

        name2User1AtributteColor.value = "name-color-blue";
        name2User1Value.setAttributeNode(name2User1AtributteColor);

        const name1User2Value = document.getElementById('name1-user2');
        const name1User2AtributteColor = document.createAttribute("class");

        name1User2AtributteColor.value = "name-color-red";
        name1User2Value.setAttributeNode(name1User2AtributteColor);

        confirmAction();
} 
} else if(name1User1 === name2User2) {
    //Prompt for color name.
    const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

    let promptNameText = promptNameColor;
    

    if(promptNameText === 'rojo') {

        const name1User1Value = document.getElementById('name1-user1');
        const name1User1AtributteColor = document.createAttribute("class");

        name1User1AtributteColor.value = "name-color-red";
        name1User1Value.setAttributeNode(name1User1AtributteColor);

        const name2User2Value = document.getElementById('name2-user2');
        const name2User2AtributteColor = document.createAttribute("class");

        name2User2AtributteColor.value = "name-color-blue";
        name2User2Value.setAttributeNode(name2User2AtributteColor);

        confirmAction();
        
    } else if (promptNameText === 'azul') {

        const name1User1Value = document.getElementById('name1-user1');
        const name1User1AtributteColor = document.createAttribute("class");

        name1User1AtributteColor.value = "name-color-blue";
        name1User1Value.setAttributeNode(name1User1AtributteColor);

        const name2User2Value = document.getElementById('name2-user2');
        const name2User2AtributteColor = document.createAttribute("class");

        name2User2AtributteColor.value = "name-color-red";
        name2User2Value.setAttributeNode(name2User2AtributteColor);

        confirmAction();
} 
} else if(name2User1 === name2User2) {
    //Prompt for color name.
    const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

    let promptNameText = promptNameColor;
    

    if(promptNameText === 'rojo') {

        const name2User1Value = document.getElementById('name2-user1');
        const name2User1AtributteColor = document.createAttribute("class");

        name2User1AtributteColor.value = "name-color-red";
        name2User1Value.setAttributeNode(name2User1AtributteColor);

        const name2User2Value = document.getElementById('name2-user2');
        const name2User2AtributteColor = document.createAttribute("class");

        name2User2AtributteColor.value = "name-color-blue";
        name2User2Value.setAttributeNode(name2User2AtributteColor);

        confirmAction();
        
    } else if (promptNameText === 'azul') {

        const name2User1Value = document.getElementById('name2-user1');
        const name2User1AtributteColor = document.createAttribute("class");

        name2User2AtributteColor.value = "name-color-blue";
        name2User1Value.setAttributeNode(name2User1AtributteColor);

        const name2User2Value = document.getElementById('name2-user2');
        const name2User2AtributteColor = document.createAttribute("class");

        name2User2AtributteColor.value = "name-color-red";
        name2User2Value.setAttributeNode(name2User2AtributteColor);

        confirmAction();
} 
} else {
    setTimeout(function() {
        alert('Los nombres no están duplicados');
        console.log("No hubo coincidencias de nombres")
        confirmAction();
    }, 3000); // Ejecuta la función después de 3 segundos (3000 milisegundos)
    
}


function confirmAction(messageConfirmText){
        messageConfirmText = "¿Deseas evaluar los apellidos?";
        if(confirm(messageConfirmText)){
          if(lastName1User1 === lastName1User2) {
                //Prompt for color name.
                const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");
        
                let promptNameText = promptNameColor;
                console.log("Si hubo coincidencias")
        
                if(promptNameText === 'rojo') {
        
                    const lastName1User1Value = document.getElementById('lastName1-user1');
                    const lastName1User1AtributteColor = document.createAttribute("class");
        
                    lastName1User1AtributteColor.value = "name-color-red";
                    lastName1User1Value.setAttributeNode(lastName1User1AtributteColor);
        
                    const lastName1User2Value = document.getElementById('lastName1-user2');
                    const lastName1User2AtributteColor = document.createAttribute("class");
        
                    lastName1User2AtributteColor.value = "name-color-blue";
                    lastName1User2Value.setAttributeNode(lastName1User2AtributteColor);
                    
                    
                } else if (promptNameText === 'azul') {
        
                    const lastName1User1Value = document.getElementById('lastName1-user1');
                    const lastName1User1AtributteColor = document.createAttribute("class");
        
                    lastName1User1AtributteColor.value = "name-color-blue";
                    lastName1User1Value.setAttributeNode(lastName1User1AtributteColor);
        
                    const lastName1User2Value = document.getElementById('lastName1-user2');
                    const lastName1User2AtributteColor = document.createAttribute("class");
        
                    lastName1User2AtributteColor.value = "name-color-red";
                    lastName1User2Value.setAttributeNode(lastName1User2AtributteColor);
            } 
         } else if(lastName2User1 === lastName1User2) {
            //Prompt for color name.
            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");
        
            let promptNameText = promptNameColor;
            console.log("Si hubo coincidencias")
        
            if(promptNameText === 'rojo') {
        
                const lastName2User1Value = document.getElementById('lastName2-user1');
                const lastName2User1AtributteColor = document.createAttribute("class");
        
                lastName2User1AtributteColor.value = "name-color-red";
                lastName2User1Value.setAttributeNode(lastName2User1AtributteColor);
        
                const lastName1User2Value = document.getElementById('lastName1-user2');
                const lastName1User2AtributteColor = document.createAttribute("class");
        
                lastName1User2AtributteColor.value = "name-color-blue";
                lastName1User2Value.setAttributeNode(lastName1User2AtributteColor);

                
            } else if (promptNameText === 'azul') {
        
                const lastName2User1Value = document.getElementById('lastName2-user1');
                const lastName2User1AtributteColor = document.createAttribute("class");
        
                lastName2User1AtributteColor.value = "name-color-blue";
                lastName2User1Value.setAttributeNode(lastName2User1AtributteColor);
        
                const lastName1User2Value = document.getElementById('lastName1-user2');
                const lastName1User2AtributteColor = document.createAttribute("class");
        
                lastName1User2AtributteColor.value = "name-color-red";
                lastName1User2Value.setAttributeNode(lastName1User2AtributteColor);

        } 
        

         } else if(lastName1User1 === lastName2User2) {
            //Prompt for color name.
            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");
        
            let promptNameText = promptNameColor;
            console.log("Si hubo coincidencias")
        
            if(promptNameText === 'rojo') {
        
                const lastName1User1Value = document.getElementById('lastName1-user1');
                const lastName1User1AtributteColor = document.createAttribute("class");
        
                lastName1User1AtributteColor.value = "name-color-red";
                lastName1User1Value.setAttributeNode(lastName1User1AtributteColor);
        
                const lastName2User2Value = document.getElementById('lastName2-user2');
                const lastName2User2AtributteColor = document.createAttribute("class");
        
                lastName2User2AtributteColor.value = "name-color-blue";
                lastName2User2Value.setAttributeNode(lastName2User2AtributteColor);
 
                
            } else if (promptNameText === 'azul') {
        
                const lastName1User1Value = document.getElementById('lastName1-user1');
                const lastName1User1AtributteColor = document.createAttribute("class");
        
                lastName1User1AtributteColor.value = "name-color-blue";
                lastName1User1Value.setAttributeNode(lastName1User1AtributteColor);
        
                const lastName2User2Value = document.getElementById('lastName2-user2');
                const lastName2User2AtributteColor = document.createAttribute("class");
        
                lastName2User2AtributteColor.value = "name-color-red";
                lastName2User2Value.setAttributeNode(lastName2User2AtributteColor);

        } 
         } else if(lastName2User1 === lastName2User2) {
            //Prompt for color name.
            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");
        
            let promptNameText = promptNameColor;
            console.log("Si hubo coincidencias")
        
            if(promptNameText === 'rojo') {
        
                const lastName2User1Value = document.getElementById('lastName2-user1');
                const lastName2User1AtributteColor = document.createAttribute("class");
        
                lastName2User1AtributteColor.value = "name-color-red";
                lastName2User1Value.setAttributeNode(lastName2User1AtributteColor);
        
                const lastName2User2Value = document.getElementById('lastName2-user2');
                const lastName2User2AtributteColor = document.createAttribute("class");
        
                lastName2User2AtributteColor.value = "name-color-blue";
                lastName2User2Value.setAttributeNode(lastName2User2AtributteColor);

                
            } else if (promptNameText === 'azul') {
        
                const lastName2User1Value = document.getElementById('lastName2-user1');
                const lastName2User1AtributteColor = document.createAttribute("class");
        
                lastName2User1AtributteColor.value = "name-color-blue";
                lastName2User1Value.setAttributeNode(lastName2User1AtributteColor);
        
                const lastName2User2Value = document.getElementById('lastName2-user2');
                const lastName2User2AtributteColor = document.createAttribute("class");
        
                lastName2User2AtributteColor.value = "name-color-red";
                lastName2User2Value.setAttributeNode(lastName2User2AtributteColor);


        } 
         } else {
            console.log("No hubo coincidencias de apellidos")
        }
        } else {
            console.log('No se evaluaron los apellidos.');
        }
}