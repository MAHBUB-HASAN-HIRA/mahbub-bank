
/* time sector */
let date = new Date();
let dateZone = document.getElementById("time");
dateZone.textContent = date;//login Area date
let balanceDateZone = document.getElementById("balance_time");
balanceDateZone.textContent = date;//Balance Area date


const loginZone = document.querySelector('#login-panel');
const registrationBtn = document.querySelector('.register-btn');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');

const balance_area = document.querySelector('.balance_section');
const backBtn = document.querySelector('.back-btn');
let name = document.getElementById('name');
let email = document.getElementById('email');




/* Registration button handler */
        registrationBtn.addEventListener('click', function(){

            if(nameInput.value.length === 0 || emailInput.value.length === 0 || passInput.value.length === 0){
                alert('Please Fill All Input');
            }
            else if(nameInput.value.length > 0 && emailInput.value.length > 0 && passInput.value.length > 0){
              
            alert(`Your Registration Successfully Complete.`);
            loginZone.style.display = 'none';
            balance_area.style.display = 'block';
            
            name.textContent = nameInput.value.toString() || 'anonymous_user';
            email.textContent = emailInput.value.toString() || 'user@email.com';
            }
            
        });

        // this function for goback button 
    backBtn.addEventListener('click', function(){
    const loginZone = document.querySelector('#login-panel');
    loginZone.style.display = 'block';
    balance_area.style.display = 'none';
   });


// This function give me a collection of arry list from selector;
    function balance_area_document_list() {
        let depositInput = document.getElementById('deposit_input').value;
        let depositText = document.querySelector('.deposit_title').innerText;
        let balanceText = document.querySelector('.balance_title').innerText;
        let withdrawInput = document.getElementById('withdraw_input').value;
        let withdrawText = document.querySelector('.withdraw_title').innerHTML;
        let depositBtn = document.getElementById('deposit_btm');
        let withdrawBtn = document.getElementById('withdraw_btm');

        return [depositInput, depositText, balanceText, withdrawInput, withdrawText, depositBtn, withdrawBtn];
        }

// this function convert all input and current text from deposit, withdraw, balance and return an arry 
    function convertToNumber(inputToNumber, currentTextToNumber, balanceTextToNumber){
        let input_to_Number = parseFloat(inputToNumber);
        let current_text_to_Number = parseFloat(currentTextToNumber);
        let balance_to_Number = parseFloat(balanceTextToNumber);

       return [input_to_Number, current_text_to_Number, balance_to_Number];
}

//here is deposit button for deposit money to total balance
    const deposit_btn = balance_area_document_list();  

        deposit_btn[5].addEventListener('click', function(){

            const document_arry = balance_area_document_list();

            if (document_arry[0] < 0 || document_arry[0] == isNaN(document_arry[0])) {
                alert(`Please, Enter A Positive Number!`);
                document.getElementById('deposit_input').value = '';
            }
            else{
                const values = convertToNumber( document_arry[0], document_arry[1], document_arry[2]);
                
                const totalDeposit = values[0] + values[1];
                document.querySelector('.deposit_title').innerText = totalDeposit;
        
                const totalBalance = values[0] + values[2];
                document.querySelector('.balance_title').innerText = totalBalance;
        
                document.getElementById('deposit_input').value = '';         
            }   
    });

//here is withdraw button for withdraw money to total balance
    const withdraw_btn = balance_area_document_list();      

        withdraw_btn[6].addEventListener('click', function(){

            const document_arry = balance_area_document_list();

            if (document_arry[3] < 0 || document_arry[3] == isNaN(document_arry[3])) {
                alert(`Please, Enter A Positive Number!`);
                document.getElementById('withdraw_input').value = '';
            }
            else{
                const values = convertToNumber( document_arry[3], document_arry[4], document_arry[2]);
                
                const totalWithdraw = values[0] + values[1];
                document.querySelector('.withdraw_title').innerText = totalWithdraw;

                const totalBalance = values[2] - values[0];
                document.querySelector('.balance_title').innerText = totalBalance;

                document.getElementById('withdraw_input').value = ''; 
                // console.log(values[0])        
            }   
        });
    
   



   
