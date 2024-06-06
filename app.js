        // Configure o Firebase com suas credenciais

          };

        firebase.initializeApp(firebaseConfig);

        // Obtém uma referência para o banco de dados Firebase
        const database = firebase.database();

        // Função para enviar dados para o Firebase
        function enviarDadosParaFirebase() {
            const nomeAluno = document.getElementById('nome').value;
            const turma = document.getElementById('turma').value;
            const curso = document.getElementById('curso').value;
            const imagem = document.getElementById('imagem').files[0]; // Obtém o arquivo de imagem

            // Cria um objeto com os dados
            const dados = {
                nomeAluno: nomeAluno,
                turma: turma,
                curso: curso,
                imagem: imagem.name // Salva o nome do arquivo de imagem
            };

            // Insere os dados no Firebase
            database.ref('alunos').push(dados)
                .then(() => {
                    alert('Dados enviados com sucesso!');
                    // Limpa os campos após o envio
                    document.getElementById('nome').value = '';
                    document.getElementById('turma').value = '';
                    document.getElementById('curso').value = '';
                    document.getElementById('imagem').value = '';
                })
                .catch((error) => {
                    console.error('Erro ao enviar os dados: ', error);
                });
        }
   