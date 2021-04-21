

    var users = [
        {
            name: 'Lucy',
            gender: 'F',
            hobby: 'pets',
            avatar: 'avatar1.jpeg'        
        },
        {
            name: 'Betty',
            gender: 'F',
            hobby: 'pets',
            avatar: 'avatar2.jpeg'
        },
        {
            name: 'Ronald',
            gender: 'M',
            hobby: 'music',
            avatar: 'avatar3.jpeg'
        },
        {
            name: 'Christopher',
            gender: 'M',
            hobby: 'sports',
            avatar: 'avatar4.jpeg'
        },
        {
            name: 'Ximena',
            gender: 'F',
            hobby: 'reading',
            avatar: 'avatar5.jpeg'
        },
        {
            name: 'Paul',
            gender: 'M',
            hobby: 'shopping',
            avatar: 'avatar6.jpeg'
        },
        {
            name: 'Charlie',
            gender: 'M',
            hobby: 'pets',
            avatar: 'avatar7.jpeg'
    
}];




window.addEventListener('load' , function (){
    
var results = document.getElementById('results');

    function search() {
        //get the hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        console.log(gender);
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
      
   
      results.innerHTML = resultsHtml; 
       
    }
 
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    
});