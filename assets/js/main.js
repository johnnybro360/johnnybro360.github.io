document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});


if (document.URL.includes("projects")) {
    const nextButton = document.getElementById("moveNext");
    const projectExplanation = document.getElementById("project-explanation");
    const classes = projectExplanation.classList;

    function toggleActive() {
        const result = classes.toggle("active")
        projectExplanation.innerHTML = result ? `<h3>Fruitsauce</h3>
                    <h4>(Feb 2020 - May 2022)</h4>
                    <div>
                        <h5>Fruitsauce is a digitally-led integrated advertising agency.</h5>
                        <h5>At Fruitsauce, I've worked on projects using a variety of technologies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <h5>including:</h5>
                    </div>
                    <ul>
                        <li>[React,&nbsp;</li>
                        <li>React Native,&nbsp;</li>
                        <li>Google Cloud Platform,&nbsp;</li>
                        <li>Firebase]</li>
                    </ul>` : `<h3>The Verb Project</h3>
        <h4>(Jun 2022 - Present)</h4>
        <div>
            <h5>The Verb Project is a global marketplace for design assets serving millions.</h5>
            <h5>I work on the web application.</h5>
            <h5>The tech stack at the Verb Project consists of:</h5>
        </div>
        <ul>
            <li>[Python(Flask),&nbsp;</li>
            <li>React-Redux,&nbsp;</li>
            <li>Docker,&nbsp;</li>
            <li>AWS]</li>
        </ul>`;
        const appImage = document.getElementById("app-image");

        if (nextButton.innerHTML.includes("Next")) {
            nextButton.innerHTML = "Prev<<<";
            appImage.src = "../assets/img/webapp2.png";
        } else {
            nextButton.innerHTML = "Next>>>";
            appImage.src = "../assets/img/webapp1.png";

        }

    }

    if (nextButton) {
        nextButton.addEventListener("click", toggleActive)
    }


} else {
    const container = document.getElementsByClassName("main-container");


    if (container) {
        container.item(0).addEventListener("mouseenter", () => {

            const copyPhrases = document.getElementsByClassName("copy-phrase");

            copyPhrases.item(0).innerHTML = `<h3>My name is Jonghun Park.
                I’m a software developer in Perth.</h3>
                <h3>I'm looking to get started on app or web development projects.</h3>
                    <h3>&nbsp;</h3>`
        })

        container.item(0).addEventListener("mouseleave", () => {

            const copyPhrases = document.getElementsByClassName("copy-phrase");

            copyPhrases.item(0).innerHTML = `<h3>Empower your digital presence with</h3>
                <h3>intelligent and impactful mobile apps and websites</h3>
                <h3>that just work.</h3>`
        })
    }
}




