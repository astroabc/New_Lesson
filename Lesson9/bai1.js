    const content = document.querySelector("#content");
    const btnAdd = document.querySelector(".btn-add");
      btnAdd.addEventListener("click", () => {
        if (!content.value) {
          alert("Xin hãy nhập thông tin!");
          return false;
        }
        let tasks = [];
        tasks.push({
          content: content.value,
        });
        getTask(tasks);
        content.value = "";
      });

      function getTask(tasks) {
        tasks.map((task) => {
          console.log(task)
        });
      }