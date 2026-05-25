 app.get("/api/status", (req,res)=>{
    res.json({
        status:"online",
        uptime:process.uptime(),
        users:12
    });
});