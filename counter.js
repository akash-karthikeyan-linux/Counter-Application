function OnIncrement()
{
    let counter_number = document.getElementById("counterValue").textContent;
    counter_number = parseInt(counter_number);
    let previous_number = counter_number;
    let updated_number = previous_number + 1;
    document.getElementById("counterValue").textContent = updated_number;
    
    if (updated_number > 0)
    {
        document.getElementById("counterValue").style.color = "green";
    }
    
    else if (updated_number < 0)
    {
        document.getElementById("counterValue").style.color = "red";
    }
    
    else
    {
        document.getElementById("counterValue").style.color = "black";
    }
}

function OnDecrement()
{
    let counter_number = document.getElementById("counterValue").textContent;
    counter_number = parseInt(counter_number);
    let previous_number = counter_number;
    let updated_number = previous_number - 1;
    document.getElementById("counterValue").textContent = updated_number;
    
    if (updated_number > 0)
    {
        document.getElementById("counterValue").style.color = "green";
    }
    
    else if (updated_number < 0)
    {
        document.getElementById("counterValue").style.color = "red";
    }
    
    else
    {
        document.getElementById("counterValue").style.color = "black";
    }
}

function OnReset()
{
    document.getElementById("counterValue").textContent = "0";
    document.getElementById("counterValue").style.color="black";
}