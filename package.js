Package.describe({
  summary: "Wrapper for node entities"
});
    
Npm.depends({
  "entities": "0.3.0"
});

Package.on_use(function(api) {
  api.export("Entities");  
  api.add_files('entities.js', 'server');
});