      function calc() {
        let income = document.getElementById("income").value;
        let bills = document.getElementById("bills").value;
        let groceries = document.getElementById("groceries").value;
        let gas = document.getElementById("gas").value;
        let emergency = document.getElementById("emergency").value;
        let insurance = document.getElementById("insurance").value;

        let total = income - bills - groceries - gas - emergency - insurance;

        document.getElementById("total").innerHTML = `total: ${total}`;
      }

      if (total <= 0) {
        document.getElementById(first-tip).style.visibility = "visible";
      }

        if (savings <= 0) {
            document.getElementById(second-tip).style.visibility = "visible";
        }

        if (income < 5000) {
            document.getElementById(third-tip).style.visibility = "visible";
        }
      