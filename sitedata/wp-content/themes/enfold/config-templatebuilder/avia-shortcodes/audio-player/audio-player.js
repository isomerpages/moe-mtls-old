// -------------------------------------------------------------------------------------------
// 
// AVIA Player
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	var autostarted = false,
		container = null,
	
		monitorStart = function( container )
			{
				var play_pause	= container.find('.av-player-player-container .mejs-playpause-button');
				
				if( play_pause.length == 0 )
				{
					setTimeout( function(){
							monitorStart( container );
						}, 200 );
				}
				
				if( ! play_pause.hasClass('mejs-pause') )
				{
					play_pause.trigger( 'click' );
				}
				
			};
	
	$.fn.aviaPlayer = function( options )
	{	
		if( ! this.length ) return; 

		return this.each(function()
		{
			var _self 			= {};
			
			_self.container		= $( this );
			
			/**
			 * Limit autostart to the first player with this option set only
			 * 
			 * DOM is not loaded completely and we have no event when player is loaded
			 */
			if( _self.container.hasClass( 'avia-playlist-autoplay' ) && ! autostarted )
			{
				if( ( _self.container.css('display') == 'none') || ( _self.container.css("visibility") == "hidden" ) )
				{
					return;
				}
				
				autostarted = true;
				setTimeout( function(){
							monitorStart( _self.container );
						}, 200 );
			}
			
		});
	};
}(jQuery));