function compute()
{
    if(principal.value < 1){
        alert("Amount has to be a positive quantity")
        principal.focus()
        return
    }
    
    let interest = principal.value * years.value * rate.value / 100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p>If you deposit <mark>"+ principal.value +"</mark>,<br>an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+yearInFuture+"</mark></p>";

}
function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}