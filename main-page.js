const main_page_btn_reg_width = '12%';
const increased_btn_width = '15%';
const decreased_btn_width = '12%';


const main_page_btn_reg_height = '30%';
const increased_btn_height = '35%';
const decreased_btn_height = '30%';

const main_page_btn_reg_br = '120px'; //regular border-radius


const reg_btn_font_size = '3vw';
const decreased_btn_font_size = '2vw';


const swe_button = document.querySelector('.SWE-button');
const artist_button = document.querySelector('.Artist-button');
const athlete_button = document.querySelector('.Athlete-button');
const extrovert_button = document.querySelector('.Extrovert-button');

const main_page_buttons = [swe_button, artist_button, athlete_button, extrovert_button];

const class_to_description = {
    'SWE-button': 'SWE',
    'Artist-button': 'Artist',
    'Athlete-button': 'Athlete',
    'Extrovert-button': 'Extrovert'
};
const class_to_name = {
    'SWE-button': '<>',
    'Artist-button': '✎',
    'Athlete-button': 'ATH',
    'Extrovert-button': 'ツ'
};

const new_buttons = main_page_buttons.map(curr_button => {
    console.log('curr button', curr_button.className)
    //curr_button = main_page_buttons[i];
        curr_button.addEventListener('mouseover', function (event){
            curr_button.style.width = increased_btn_width;
            curr_button.style.opacity = '1';
            curr_button.style.fontSize = decreased_btn_font_size;
            
            curr_button.innerHTML = class_to_description[curr_button.className];
            curr_button.style.height = increased_btn_height;
        
            /*for (let i = 0; i < main_page_buttons.length; i++) {
                if (main_page_buttons[i] != curr_button) {
                    main_page_buttons[i].style.width = decreased_btn_width;
                    main_page_buttons[i].style.height = decreased_btn_height;
                }
            }*/
            
        });
        
        curr_button.addEventListener('mouseout', function (event){
            curr_button.style.width = main_page_btn_reg_width;
            curr_button.innerHTML = class_to_name[curr_button.className];
            curr_button.style.height = main_page_btn_reg_height;
            curr_button.style.opacity = '1';
            curr_button.style.fontSize = reg_btn_font_size;
        
            /*for (let i = 0; i < main_page_buttons.length; i++) {
                if (main_page_buttons[i] != curr_button) {
                    main_page_buttons[i].style.width = main_page_btn_reg_width;
                    main_page_buttons[i].style.height = main_page_btn_reg_height;
                }
            }*/
        });
})


const frontpagename = document.getElementById('front-page-name');

frontpagename.addEventListener('mouseover', function (event) {
    frontpagename.style.width = '110%';
    frontpagename.style.height = '110%';
});

frontpagename.addEventListener('mouseout', function (event) {
    frontpagename.style.width = '100%';
    frontpagename.style.height = '100%';
})

