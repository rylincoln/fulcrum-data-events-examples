// SET ALL FIELDS VISIBLE, EDITABLE, AND NOT REQUIRED BASED ON EMAIL

ON('load-record', function(event) {
  if (EMAIL()=='email@email.org')
  {
    DATANAMES().forEach
    (function(dataName) 
     {
      SETREADONLY(dataName, false);
      SETHIDDEN(dataName, false);
      SETREQUIRED(dataName, false);
     }
    );
  }
});
