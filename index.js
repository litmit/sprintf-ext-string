"use strict";

function format_string(options,arg) 
{
   var re_format = /^((Cl?)|(Fl?)|(fU?)|[Ul])?$/;

   arg = String(arg);

   var fmt = options.format;

   if ( fmt === undefined ) 
   {
      fmt = "U";
   } 

   if ( !re_format.test(fmt) ) 
   {
      throw new SyntaxError(format_string.sprintf("[ext-str] unknown format '%s'",fmt));
   }

   if ( fmt.indexOf("l") !== -1 ) 
   {
      arg = arg.toLowerCase();
   } 
   else if ( fmt.indexOf("U") !== -1 ) 
   {
      arg = arg.toUpperCase();
   }

   switch (fmt[0]) 
   {
      case "F":
         if ( arg.length >= 1 ) 
         {
            arg = arg[0].toUpperCase() + arg.substring(1);
         }
         break;

      case "f":
         if ( arg.length >= 1 ) 
         {
            arg = arg[0].toLowerCase() + arg.substring(1);
         }
         break;

      case "C":
         arg = arg.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
         break;
   }

   return arg;
}

function bind(sprintf,specifier)
{
   format_string.sprintf = sprintf;
   sprintf.register_extension(specifier || "S",format_string);
}

exports.bind = bind;
