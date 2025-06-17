function addTask() {
      const taskInput = document.getElementById('new-task');
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Veuillez entrer une tâche.');
        return;
      }

      const li = document.createElement('li');
      li.textContent = taskText;
      
 const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Supprimer';
      deleteBtn.onclick = function() {
        li.remove();
      };
      
      li.appendChild(deleteBtn);
      document.getElementById('task-list').appendChild(li);
       taskInput.value = '';
    }


 