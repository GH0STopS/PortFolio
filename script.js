document.addEventListener("DOMContentLoaded", function () {
    const commandHistory = [];
    let historyIndex = 0;


    const terminalOutput = document.getElementById("terminal-output");
    const userInput = document.getElementById("user-input");

    // Simulate a prompt
    const promptText = "portfolio@sarath:~$ ";

    function handleUserInput(event) {
        if (event.key === "Enter") {
            const inputText = userInput.value;
            processCommand(inputText);
            userInput.value = ""; // Clear the input field
        } else if (event.key === "ArrowUp") {
            if (historyIndex > 0) {
                historyIndex--;
                userInput.value = commandHistory[historyIndex];
            }
        } else if (event.key === "ArrowDown") {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                userInput.value = commandHistory[historyIndex];
            } else {
                userInput.value = "";
            }
        }
    }

    function processCommand(command) {
        commandHistory.push(command);
        historyIndex = commandHistory.length;
        const promptStyledText = `${promptText}${command}\n`;
    
        // Helper function to create colored content
        function formatContent(content, color) {
            return `<span style="color: ${color};">${content}</span>`;
        }
    
        if (command.trim() === "clear") {
            terminalOutput.innerHTML = ""; // Clear terminal screen
        } else if (command.trim() === "help") {
            terminalOutput.innerHTML += `${promptStyledText}${formatContent(
                `Here are some commands you can try:\n- clear: clears the terminal\n- help: lists commands\n- about: about me\n- skills: skills I have\n- projects: projects I’ve done\n- whatamidoing: what am I currently working on\n- exit: exit the terminal\n`,
                "white"
            )}`;
        } else if (command.trim() === "about") {
            terminalOutput.innerHTML += `${promptStyledText}${formatContent(
                `A curious CyberSecurity pursuer currently doing some courses on it.\nBCA graduate dwelling in this IT world. Trying to upskill myself.\n`,
                "white"
            )}`;
        } else if (command.trim() === "skills") {
            terminalOutput.innerHTML += `${promptStyledText}${formatContent(
                `Languages: C/C++, Java, JavaScript, PHP\nTools: Cisco Packet Tracer, Nmap, Kracker, VSS, Git\nSoft Skills: Team Work, Problem Solving\n`,
                "white"
            )}`;
        } else if (command.trim() === "projects") {
            terminalOutput.innerHTML += `${promptStyledText}${formatContent(
                `Cloud Security with AWS IAM\nProject Duration: 1.5 hours\nConfigured AWS IAM roles, groups, and policies to enforce least privilege and multi-factor authentication. Designed and tested JSON policies for secure resource management, enhancing compliance and access control.\n\nEyeMate - Blind Assistant App\n08/2023 - 04/2024\nDeveloped the Eyemate blind assistant app under the guidance of Corezone Solutions using Python and Android, which enhanced accessibility for visually impaired users by providing real-time assistance and navigation features.\n\nInk&Paper - Online BookStore\n06/2023 - 08/2023\nIndependently developed an online bookstore, Ink&Paper, using HTML, CSS, JavaScript, and MySQL. Demonstrated full-stack skills, resulting in a functional platform that increased user engagement.\n`,
                "white"
            )}`;
        } else if (command.trim() === "whatamidoing") {
            terminalOutput.innerHTML += `${promptStyledText}${formatContent(
                `Currently doing a course on Network Basics from Cisco Networking Academy.\nAlso doing a remote CyberSecurity Internship at Red Users.\n`,
                "white"
            )}`;
        } else if (command.trim() === "exit") {
            window.location.href = './index.html';
        } else {
            terminalOutput.innerHTML += `${promptStyledText}${formatContent(
                `${command} is not a valid command.\n`,
                "red"
            )}`;
        }
    
        updateTerminal();
    }
    

    function updateTerminal() {
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Keep the terminal scrolled to the bottom
    }

    // Attach event listener for input field
    userInput.addEventListener("keydown", handleUserInput);

});
