function getGrades() {
    var numStudents = parseInt(document.getElementById('numStudents').value)
    var grades = []
    var sum = 0
    var maxGrade = -Infinity
    var minGrade = Infinity

    for (var i = 0; i < numStudents; i++) {
        var validGrade = false
        var grade
        while (!validGrade) {
            grade = (prompt("Digite a nota do aluno " + (i + 1) + ":"))
            if (grade === null) {
                return; // Cancelado pelo usuário
            }
            grade = parseFloat(grade)
            if (!isNaN(grade) && grade >= 0 && grade <= 10) {
                validGrade = true
            } else {
                alert("Por favor, insira uma nota válida entre 0 e 10.")
            }
        }
        grades.push(grade)
        sum += grade
        if (grade > maxGrade) {
            maxGrade = grade
        }
        if (grade < minGrade) {
            minGrade = grade
        }
    }

    var average = sum / numStudents;

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h3>Resultados</h3>" +
                           "<p>Média da turma: " + average.toFixed(2) + "</p>" +
                           "<p>Maior nota: " + maxGrade.toFixed(2) + "</p>" +
                           "<p>Menor nota: " + minGrade.toFixed(2) + "</p>"
}