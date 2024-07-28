var typed=new Typed(".text",{
    strings: ["Student","FullStack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
function selectProject(projectId) {
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        project.classList.remove('selected');
    });
    document.getElementById(projectId).classList.add('selected');
}