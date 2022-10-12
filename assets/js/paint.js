

function configureListeners() {
    var images = document.querySelectorAll("img") //get all the images from the Document and build a NodeList.

    for (var i = 0; i < images.length; i++) {//get the number of image tags and make assigments

        let getImage= document.getElementById(images[i].id) //get the different images by the CSS Id.

        getImage.addEventListener('mouseover', addOpacity, false) //assign mouseover event, then add Opacity.       
        getImage.addEventListener('mouseout', removeOpacity, false)//assign mouseout event, the remove Opacity.        
    } 
}


function addOpacity(event) {
    // Check if the image tag doesn't contain a CSS class dim then add class dim;otherwise, execute getProductInfo.
    if (!this.classList.contains('dim')){
    this.classList.add('dim')
    }
    getProductInfo(event.target.id);     

}

function removeOpacity(event) {
     //// Check if the image tag contain a CSS class dim then remove class dim;otherwise,remove color-price and color-name.
     if (this.classList.contains('dim')){
     this.classList.remove('dim')
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99'  
            colorName = 'Lime Green'
            updatePrice(colorName, price)
            break; 

        case 'pn2':
            price = '$11.14'  
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
             break;

        case 'pn3':
            price = '$22.99'  
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn4':
            price = '4.99'  
            colorName = 'Solid Black'
            updatePrice(colorName, price)
            break;

        case 'pn5':
            price = '$8.22'  
            colorName = 'Solid Cyan'
            updatePrice(colorName, price)   
            break;

        case 'pn6':
            price = '$11.99'  
            colorName = 'Solid Purple'
            updatePrice(colorName, price)        
            break;

        case 'pn7':
            price = '$13.42'  
            colorName = 'Solid Red'
            updatePrice(colorName, price)
            break;   
        case 'pn8':
            price = '$21.89'  
            colorName = 'Solid White'
            updatePrice(colorName, price)
            break;

        case 'pn9':
            price = '$14.99'  
            colorName = 'Lime Green'
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        //let colorPrice = document.getElementById(paintColor) // select element with corresponding id
        // display price
        
        //let color = // select element with corresponding id
        //display color name
        let colorPrice = document.getElementById('color-price');//h2 tag id="color-price" price to be inserted.
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');//h2 tag id = "color-name" color to be inserted.
        color.textContent = colorName; 
        
    }
    
}


