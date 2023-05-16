import './style.css';
import * as logic from './logic.js';
import * as async from './async.js'
import "@fontsource/roboto";

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'input');




const page = elementBuild('div', {'id' : 'container'},
                elementBuild('div', {'id': 'weather'},
                    elementBuild('div', {'id': 'weatherCard'},
                        elementBuild('div', {'id' : 'location'}),
                        elementBuild('div', {'id' : 'condition'}),
                       elementBuild('div', {'id' : 'tempCon'},
                        elementBuild('div', {'id': 'temp'}),
                        elementBuild('div', {'id' : 'con'},
                            elementBuild('img', {'id' : 'conImg'}))),
                       elementBuild('div', {'id' : 'feelsHum'},
                            elementBuild('div', {'id': 'feelsBox'},
                                elementBuild('div', {'id': 'feelsTit'}, "Feels Like"),
                                elementBuild('div', {'id' : 'feels'})),
                            elementBuild('div', {'id' : 'humBox'},
                            elementBuild('div', {'id' : 'humTit'}, "humidity"),
                            elementBuild('div', {'id' : 'hum'})
                            )
                        ) 
                    ) 
                ),
                elementBuild('div', {'id' : 'search'},
                    elementBuild('div', {'id' : 'searchInfo'},
                        elementBuild('div', {'id': 'searchTitle'}, 'Current Weather'),
                        elementBuild('div', {'id' : 'searchSearch'}, 'Enter City'),
                        elementBuild('div', {'id': 'searchDiv'} , input )
                    )    
                ) 
            )

document.body.appendChild(page);
async.getForecast('Spyrock')




function elementBuild (type, attributes, ...children) {

    const element = document.createElement(type)
    
    for (let key in attributes) {

        element.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        }  else{
            element.appendChild(child)
        }
    })

    return element;
}



input.addEventListener('keypress', (e) => {
    if (input.value === "") {
        return;
    } else if (e.key === 'Enter') {
    async.getForecast(input.value);
    input.value = "";
    }
})





