window.onload = () => {

    var wordList = [ "constanly learning", "living my best life", "trying to do the best", "a team player" ];
    var currentPhrase = 0;
    var currentPhraseIndex = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;
    var element = document.querySelector("#text");

    // Implements typing effect
    function Type() { 
        var text =  wordList[currentPhrase].substring(0, currentPhraseIndex + 1);
        element.innerHTML = text;
        currentPhraseIndex++;
        // If full sentence has been displayed then start to delete the sentence after some time
        if(text === wordList[currentPhrase]) {
            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    // Implements deleting effect
    function Delete() {
        var text =  wordList[currentPhrase].substring(0, currentPhraseIndex - 1);
        element.innerHTML = text;
        currentPhraseIndex--;
        // If sentence has been deleted then start to display the next sentence
        if(text === '') {
            clearInterval(_INTERVAL_VAL);
            // If last sentence then display the first one, else move to the next
            if(currentPhrase == (wordList.length - 1))
                currentPhrase = 0;
            else
                currentPhrase++;
            currentPhraseIndex = 0;
            // Start to display the next sentence after some time
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 200);
        }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);

    /* select the block to show */
    let selection = 'blk1';
    let selected = 'block1';
    let select = document.getElementById('selector');

    select.addEventListener('click', (evt) => {
    if (evt.target.id == selection) {
    return;
    }
    switch (evt.target.id) {
    case 'blk1':
        document.getElementById(selection).style.backgroundColor = 'rgb(190, 190, 190)';
        document.getElementById(selected).style.display = 'none';
        selection = 'blk1';
        selected = 'block1';
        document.getElementById('block1').style.display = 'block';
        for (let i = 0; i < document.getElementsByClassName('blk1').length; i++) {
        document.getElementsByClassName('blk1')[i].style.backgroundColor = 'white';
        }
        break;
    case 'blk2':
        document.getElementById(selection).style.backgroundColor = 'rgb(190, 190, 190)';
        document.getElementById(selected).style.display = 'none';
        selection = 'blk2';
        selected = 'block2';
        document.getElementById('block2').style.display = 'block';
        for (let i = 0; i < document.getElementsByClassName('blk2').length; i++) {
        document.getElementsByClassName('blk2')[i].style.backgroundColor = 'white';
        }
        break;
    case 'blk3':
        document.getElementById(selection).style.backgroundColor = 'rgb(190, 190, 190)';
        document.getElementById(selected).style.display = 'none';
        selection = 'blk3';
        selected = 'block3';
        document.getElementById('block3').style.display = 'block';
        for (let i = 0; i < document.getElementsByClassName('blk3').length; i++) {
        document.getElementsByClassName('blk3')[i].style.backgroundColor = 'white';
        }
        break;
    case 'blk4':
        document.getElementById(selection).style.backgroundColor = 'rgb(190, 190, 190)';
        document.getElementById(selected).style.display = 'none';
        selection = 'blk4';
        selected = 'block4';
        document.getElementById('block4').style.display = 'block';
        for (let i = 0; i < document.getElementsByClassName('blk4').length; i++) {
        document.getElementsByClassName('blk4')[i].style.backgroundColor = 'white';
        }
        break;
    }
    });
            
    
    /* show the hidden content */
    let card = document.getElementById('col');

    card.addEventListener('click', (evt) => {
        const content = evt.target.querySelector('div');
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            content.style.display = 'none';
            content.style.borderTop = 'none';
        } else {
            content.classList.add('active');
            content.style.display = 'block';
            content.style.borderTop = '1px solid #c0c0c0';
        }
    });

    let card3 = document.getElementById('col3');

    card3.addEventListener('click', (evt) => {
        const content = evt.target.querySelector('div');
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            content.style.display = 'none';
            content.style.borderTop = 'none';
        } else {
            content.classList.add('active');
            content.style.display = 'block';
            content.style.borderTop = '1px solid #c0c0c0';
        }
    });

    /* slide show */
    
    let slideIndex = [1,1];
    let slideId = ["mySlides1", "mySlides2"]
    
    function plusSlides(n, no) {
      showSlides(slideIndex[no] += n, no);
    }
    
    function showSlides(n, no) {
      let i;
      let x = document.getElementsByClassName(slideId[no]);
      if (n > x.length) {slideIndex[no] = 1}    
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex[no]-1].style.display = "block";  
    }

    showSlides(1, 0);
    showSlides(1, 1);

    const prev = document.querySelectorAll('#prev');
    prev.forEach((item) => {
        item.addEventListener('click', (evt) => {
            plusSlides(-1, parseInt(item.className));
        });
    });

    const next = document.querySelectorAll('#next');
    next.forEach((item) => {
        item.addEventListener('click', (evt) => {
            plusSlides(1, parseInt(item.className));
        });
    });


}   
