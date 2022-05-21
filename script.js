if (window.location.href.startsWith("https"))
{
    window.location.replace(window.location.href.replace("https", "http"))
} else{
    console.log("TLS seems good")
}