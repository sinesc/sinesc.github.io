var searchIndex = {};
searchIndex["avec"] = {"doc":"This crate provides a vector supporting multiple non-overlapping writers\nor multiple readers.","items":[[3,"AVec","avec","Vector supporting multiple non-overlapping writers or multiple readers. Blocks during resizes only.\n!todo panics on concurrent reads+writes",null,null],[3,"AVecReadGuard","","Result of AVec::get(). While this reference is valid, the associated AVec will panic on\nconcurrent writes.",null,null],[3,"AVecMapGuard","","Result of AVec::map(). While this reference is valid, the associated AVec will panic on\nconcurrent reads.",null,null],[11,"deref","","",0,null],[11,"drop","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"mapped_range","","Returns the actual range on the associated AVec mapped by this guard.",1,null],[11,"len","","Returns the length of the mapped range.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"set","","Sets an element within the mapped ranged of 0 &lt;= index &lt; size().",1,{"inputs":[{"name":"self"},{"name":"usize"},{"name":"t"}],"output":{"name":"self"}}],[11,"drop","","",1,null],[11,"drop","","",2,null],[11,"new","","Creates a new instance with given inital capacity",2,{"inputs":[{"name":"usize"}],"output":{"name":"avec"}}],[11,"push","","Adds an element to the vector and returns the insert position.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"usize"}}],[11,"map","","Maps a slice of the vector for write access. Faster than individual pushes for size &gt; 2.",2,null],[11,"len","","Returns the current length of the vector.",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"grow","","Grow vector by given number of elements.",2,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"clear","","Clears the vector.",2,{"inputs":[{"name":"self"}],"output":null}],[11,"get","","Maps the entire vector for read access.",2,null],[11,"capacity","","Returns current capacity. The vector will reallocate once this is exceeded.",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"AVecReadGuard"],[3,"AVecMapGuard"],[3,"AVec"]]};
searchIndex["radiant_rs"] = {"doc":"","items":[[3,"BlendMode","radiant_rs","A blendmode for use with `Layer::set_blendmode()`.\nSee [blendmodes](blendmodes/index.html) for a list of predefined modes.",null,null],[3,"Display","","A target to render to, e.g. a window or full screen.",null,null],[3,"DisplayInfo","","A struct describing a [`Display`](struct.Display.html) to be created.",null,null],[12,"width","","",0,null],[12,"height","","",0,null],[12,"title","","",0,null],[12,"transparent","","",0,null],[12,"decorations","","",0,null],[12,"monitor","","",0,null],[12,"vsync","","",0,null],[3,"Monitor","","An individual monitor, returned from [`Display::monitors()`](struct.Display.html#method.monitors).",null,null],[3,"Layer","","A non-blocking, thread-safe drawing target.",null,null],[3,"Renderer","","A renderer is used to render [`Layer`](struct.Layer.html)s or [`Scene`](struct.Scene.html)s to the\n[`Display`](struct.Display.html).",null,null],[3,"RenderContext","","A thread-safe render-context.",null,null],[3,"Sprite","","A sprite used for drawing on a [`Layer`](struct.Layer.html).",null,null],[12,"anchor","","Defines the sprite origin. Defaults to (0.5, 0.5), meaning that the center of the\nsprite would be drawn at the coordinates given to [`Sprite::draw()`](#method.draw). Likewise, (0.0, 0.0)\nwould mean that the sprite&#39;s top left corner would be drawn at the given coordinates.",1,null],[3,"Font","","A font used for writing on a [`Layer`](struct.Layer.html).",null,null],[3,"FontInfo","","A struct used to filter the result of [`Font::query_specific()`](struct.Font.html#method.query_specific)\nor to describe a [`Font`](struct.Font.html) to be created from a system font\nvia [`Font::from_info()`](struct.Font.html#method.from_info).",null,null],[12,"italic","","",2,null],[12,"oblique","","",2,null],[12,"bold","","",2,null],[12,"monospace","","",2,null],[12,"family","","",2,null],[12,"size","","",2,null],[3,"Input","","Basic keyboard and mouse support.",null,null],[3,"Color","","A color value consisting of four floating point values for the color channels red, green, blue\nand alpha.",null,null],[12,"0","","",3,null],[12,"1","","",3,null],[12,"2","","",3,null],[12,"3","","",3,null],[3,"Mat4","","A 4x4 matrix.",null,null],[3,"Vec2","","A 2-dimensional vector.",null,null],[12,"0","","",4,null],[12,"1","","",4,null],[3,"Vec3","","A 3-dimensional vector.",null,null],[12,"0","","",5,null],[12,"1","","",5,null],[12,"2","","",5,null],[4,"ButtonState","","The current state of a key or mousebutton.",null,null],[13,"Up","","The key is not currently pressed.",6,null],[13,"Pressed","","The key was just pressed. This state is reported only once per key-press.",6,null],[13,"Down","","The key has been pressed and is still being held down.",6,null],[13,"Released","","The key has just been released. This state is reported only once per key-release.",6,null],[11,"clone","","",7,null],[11,"set","","",7,null],[11,"name","","Returns the name of the device.",8,null],[11,"width","","Returns the current width in pixels.",8,null],[11,"height","","Returns the current height in pixels.",8,null],[11,"dimensions","","Returns the current width and height in pixels.",8,null],[11,"clone","","",0,null],[11,"default","","",0,{"inputs":[],"output":{"name":"displayinfo"}}],[11,"new","","Creates a new instance from given [`DisplayInfo`](struct.DisplayInfo.html).",9,{"inputs":[{"name":"displayinfo"}],"output":{"name":"display"}}],[11,"set_title","","Sets the window title.",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"show","","Makes the previously hidden window visible.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"hide","","Hides the window.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"grab_cursor","","Enables cursor grab mode. While in this mode, the mouse cursor will be hidden and\nconstrained to the window. Additionally, [`Input`](struct.Input.html) will be able to\nprovide mouse movement deltas and allow mouse coordinates to exceed the window-bounds.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"hide_cursor","","Hides the mouse cursor while it is inside the window.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"free_cursor","","Releases a previously grabbed or hidden cursor and makes it visible again.",9,{"inputs":[{"name":"self"}],"output":null}],[11,"dimensions","","Returns the window dimensions.",9,null],[11,"monitor","","Returns monitor details for given monitor id.",9,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"monitors","","Returns a vector of available monitors.",9,{"inputs":[],"output":{"name":"vec"}}],[11,"poll_events","","Polls for events like keyboard or mouse input and changes to the window. See\n[`Input`](struct.Input.html) for basic keyboard and mouse support.",9,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"was_closed","","Returns true once after the attached window was closed",9,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"clone","","",6,null],[11,"eq","","",6,null],[11,"not","","",6,null],[11,"clone","","",10,null],[11,"new","","Creates a new instance.",10,{"inputs":[{"name":"display"}],"output":{"name":"self"}}],[11,"mouse","","Returns current mouse coordinates relative to the window.",10,null],[11,"mouse_delta","","Returns mouse delta coordinates since last [`Display::poll_events()`](struct.Display.html#method.poll_events).",10,null],[11,"mouse_x","","Returns current mouse cursor x-axis position.",10,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"mouse_y","","Returns current mouse cursor y-axis position.",10,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"mouse_dx","","Returns current mouse cursor x-axis delta.",10,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"mouse_dy","","Returns current mouse cursor y-axis delta.",10,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"escape","","Returns the state of the escape key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"alt_left","","Returns the state of the left alt key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"ctrl_left","","Returns the state of the left ctrl key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"shift_left","","Returns the state of the left shift key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"shift_right","","Returns the state of the right shift key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"cursor_up","","Returns the state of the cursor up key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"cursor_down","","Returns the state of the cursor down key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"cursor_left","","Returns the state of the cursor left key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"cursor_right","","Returns the state of the cursor right key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"enter","","Returns the state of the enter/return key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"backspace","","Returns the state of the backspace key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"tab","","Returns the state of the tabulator key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"capslock","","Returns the state of the worthless key.",10,{"inputs":[{"name":"self"}],"output":{"name":"buttonstate"}}],[11,"f","","Returns the state of the given function key.",10,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"buttonstate"}}],[11,"new","","Creates a new layer with given dimensions and object limit.",11,{"inputs":[{"name":"u32"},{"name":"u32"}],"output":{"name":"self"}}],[11,"set_color","","Sets a global color multiplicator. Setting this to white means that the layer contents\nare renderered in their original colors.",11,null],[11,"color","","Returns a mutex guarded mutable reference to the global color multiplicator.",11,null],[11,"set_view_matrix","","Sets the view matrix.",11,null],[11,"view_matrix","","Returns a mutex guarded mutable reference to the view matrix.\nSee [`set_model_matrix()`](#method.set_model_matrix) for a description of the model matrix.",11,null],[11,"set_model_matrix","","Sets the model matrix.",11,null],[11,"model_matrix","","Returns a mutex guarded mutable reference to the model matrix.\nSee [`set_view_matrix()`](#method.set_view_matrix) for a description of the view matrix.",11,null],[11,"set_blendmode","","Sets the blendmode.",11,null],[11,"blendmode","","Returns a mutex guarded mutable reference to the blendmode.",11,null],[11,"clear","","Removes all previously added object from the layer. Typically invoked after the layer has\nbeen rendered.",11,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"capacity","","Returns the number of sprites the layer can hold without having to perform a blocking reallocation.",11,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"len","","Returns the number of sprites currently stored the layer.",11,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"clone","","",12,null],[11,"new","","Returns a new renderer instance.",12,{"inputs":[{"name":"display"}],"output":{"name":"self"}}],[11,"context","","Returns a reference to the renderers&#39; context. The [`RenderContext`](struct.RenderContext)\nis thread-safe and required by [`Font`](struct.Font) and [`Sprite`](struct.Sprite) to\ncreate new instances.",12,null],[11,"prepare_target","","Prepares a new target for drawing without clearing it.",12,null],[11,"clear_target","","Prepares a new target and clears it with given color.",12,null],[11,"swap_target","","Finishes drawing and swaps the drawing target to front.",12,null],[11,"draw_scene","","Draws given scene.",12,null],[11,"draw_layer","","Draws given layer.",12,null],[11,"clone","","",1,null],[11,"from_file","","Creates a new sprite texture",1,{"inputs":[{"name":"rendercontext"},{"name":"str"}],"output":{"name":"sprite"}}],[11,"draw","","Draws a sprite onto the given layer.",1,{"inputs":[{"name":"self"},{"name":"layer"},{"name":"u32"},{"name":"f32"},{"name":"f32"},{"name":"color"}],"output":{"name":"self"}}],[11,"draw_transformed","","Draws a sprite onto the given layer and applies given color, rotation and scaling.",1,{"inputs":[{"name":"self"},{"name":"layer"},{"name":"u32"},{"name":"f32"},{"name":"f32"},{"name":"color"},{"name":"f32"},{"name":"f32"},{"name":"f32"}],"output":{"name":"self"}}],[11,"width","","Returns the width of the sprite.",1,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"height","","Returns the height of the sprite.",1,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"num_frames","","Returns the number of frames of the sprite.",1,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",2,null],[11,"default","","",2,{"inputs":[],"output":{"name":"fontinfo"}}],[11,"clone","","",13,null],[11,"from_file","","Creates a font instance from a file",13,{"inputs":[{"name":"rendercontext"},{"name":"str"}],"output":{"name":"font"}}],[11,"from_info","","Creates a new font instance from given FontInfo struct",13,{"inputs":[{"name":"rendercontext"},{"name":"fontinfo"}],"output":{"name":"font"}}],[11,"query_all","","Returns the names of all available system fonts",13,{"inputs":[],"output":{"name":"vec"}}],[11,"query_specific","","Returns the names of all available system fonts with the given properties (e.g. monospace)",13,{"inputs":[{"name":"fontinfo"}],"output":{"name":"vec"}}],[11,"with_size","","Returns a new font instance with given size",13,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"font"}}],[11,"with_color","","Returns a new font instance with given color",13,{"inputs":[{"name":"self"},{"name":"color"}],"output":{"name":"font"}}],[11,"write","","Write to given layer",13,{"inputs":[{"name":"self"},{"name":"layer"},{"name":"str"},{"name":"f32"},{"name":"f32"}],"output":{"name":"font"}}],[11,"write_wrapped","","Write to given layer. Breaks lines after max_width pixels.",13,{"inputs":[{"name":"self"},{"name":"layer"},{"name":"str"},{"name":"f32"},{"name":"f32"},{"name":"f32"}],"output":{"name":"font"}}],[11,"write_transformed","","Write to given layer. Breaks lines after max_width pixels and applies given rotation and scaling.",13,{"inputs":[{"name":"self"},{"name":"layer"},{"name":"str"},{"name":"f32"},{"name":"f32"},{"name":"f32"},{"name":"f32"},{"name":"f32"},{"name":"f32"}],"output":{"name":"font"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"clone","","",3,null],[11,"transparent","","Creates a new instance with a channels set to zero.",3,{"inputs":[],"output":{"name":"color"}}],[11,"alpha","","Creates a new instance with color channels set to one and the alpha channel set to given value.",3,{"inputs":[{"name":"f32"}],"output":{"name":"color"}}],[11,"alpha_mask","","Creates a new instance with color channels set to zero and the alpha channel set to given value.",3,{"inputs":[{"name":"f32"}],"output":{"name":"color"}}],[11,"alpha_pm","","Creates a new instance with all channels set to given value.",3,{"inputs":[{"name":"f32"}],"output":{"name":"color"}}],[11,"lightness","","Creates a new instance with color channels set to given value and the alpha channel set to one.",3,{"inputs":[{"name":"f32"}],"output":{"name":"color"}}],[11,"from_hsl","","Creates a new instance from given HSL (range 0.0 - 1.0)",3,{"inputs":[{"name":"f32"},{"name":"f32"},{"name":"f32"},{"name":"f32"}],"output":{"name":"color"}}],[11,"from_temperature","","Creates a new instance from given color-temperature (~1000 to ~40000).",3,{"inputs":[{"name":"f32"},{"name":"f32"}],"output":{"name":"color"}}],[11,"r","","Returns value of the instance&#39;s red channel.",3,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"g","","Returns value of the instance&#39;s green channel.",3,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"b","","Returns value of the instance&#39;s blue channel.",3,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"a","","Returns value of the instance&#39;s alpha channel.",3,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"set","","Sets the instance&#39;s channels from another color object.",3,{"inputs":[{"name":"self"},{"name":"color"}],"output":null}],[11,"set_r","","Sets a value for the instance&#39;s red channel",3,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"color"}}],[11,"set_g","","Sets a value for the instance&#39;s green channel.",3,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"color"}}],[11,"set_b","","Sets a value for the instance&#39;s blue channel.",3,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"color"}}],[11,"set_a","","Sets a value for the instance&#39;s alpha channel.",3,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"color"}}],[11,"scale","","Multiplies the instance&#39;s color channels by given scaling factor. Does not modify alpha.",3,{"inputs":[{"name":"self"},{"name":"f32"}],"output":{"name":"color"}}],[11,"as_tuple","","Returns the instance&#39;s channels as a tuple.",3,null],[11,"white","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"black","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"red","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"green","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"blue","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"yellow","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"cyan","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"purple","","",3,{"inputs":[],"output":{"name":"color"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,null],[11,"clone","","",14,null],[11,"fmt","","",15,null],[11,"clone","","",15,null],[11,"new","","Creates a zero matrix.",15,{"inputs":[],"output":{"name":"mat4"}}],[11,"identity","","Creates an identity matrix.",15,{"inputs":[],"output":{"name":"mat4"}}],[11,"viewport","","Creates viewport matrix mapping viewport top left to (0.0, 0.0) and bottom right to (width, height)",15,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"mat4"}}],[11,"translate","","Translate matrix by given vector.",15,null],[11,"scale","","Scale matrix by given vector.",15,null],[11,"rotate_axis","","Rotates the origin around given vector.",15,null],[11,"rotate","","Rotates the origin around z.",15,null],[11,"rotate_at","","Rotates around z at given position.",15,null],[11,"scale_at","","Scales at given position.",15,null],[11,"set","","Sets the matrix value from another matrix.",15,null],[11,"get_rotation","","Returns a pure rotation matrix for given matrix",15,{"inputs":[{"name":"self"}],"output":{"name":"mat4"}}],[11,"get_translation","","Returns the matrix&#39;s translation vector.",15,{"inputs":[{"name":"self"}],"output":{"name":"vec3"}}],[11,"get_scale","","Returns the matrix&#39;s scaling vector.",15,{"inputs":[{"name":"self"}],"output":{"name":"vec3"}}],[11,"get_euler","","Get rotation matrix euler angles",15,{"inputs":[{"name":"self"}],"output":{"name":"vec3"}}],[11,"mul","","",15,null],[11,"mul","","",15,null],[11,"fmt","","",15,null],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"new","","Creates a new instances.",4,{"inputs":[],"output":{"name":"vec2"}}],[11,"len","","Returns the length of the vector",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"to_rad","","Returns the direction of the vector in radians.",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"to_deg","","Returns the direction of the vector in degrees.",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"from_rad","","Creates a unit-vector from the angle given in radians.",4,{"inputs":[{"name":"t"}],"output":{"name":"vec2"}}],[11,"from_deg","","Creates a unit-vector from the angle given in degrees.",4,{"inputs":[{"name":"t"}],"output":{"name":"vec2"}}],[11,"as_vec3","","",4,null],[11,"neg","","",4,null],[11,"add","","",4,null],[11,"mul","","",4,null],[11,"fmt","","",4,null],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"new","","Creates a new instances.",5,{"inputs":[],"output":{"name":"vec3"}}],[11,"len","","Returns the length of the vector",5,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"as_vec3","","",5,null],[11,"neg","","",5,null],[11,"add","","",5,null],[11,"mul","","",5,null],[11,"fmt","","",5,null],[0,"blendmodes","","A set of predefined blendmodes for use with `Layer::set_blendmode()`.",null,null],[5,"alpha_const","radiant_rs::blendmodes","sets the blend function for the layer (like alpha, but adds brightness value)",null,{"inputs":[{"name":"f32"}],"output":{"name":"blendmode"}}],[17,"ALPHA","","",null,null],[17,"MAX","","",null,null],[17,"MIN","","",null,null],[17,"LIGHTEN","","",null,null],[17,"OVERLAY","","",null,null],[0,"utils","radiant_rs","Optional utility features.",null,null],[3,"Rng","radiant_rs::utils","A very simple, seedable random number generator based on sin(). It is provided to simplify\nexperimentation with the library but not suitable for applications that require good quality\nrandom numbers.",null,null],[5,"renderloop","","Render loop helper function. Provides given callback with frame delta and fps data.\nThis is a more simple alternative to the main loop helper function.",null,{"inputs":[{"name":"g"}],"output":null}],[5,"mainloop","","Main loop helper function. Provides callbacks for game state changes and rendering. Calls\nstate_callback multiple times if the actual render_callback call interval exceeds the given interval.\nBoth callbacks receive a LoopState object containing frame delta and fps data.",null,{"inputs":[{"name":"duration"},{"name":"f"},{"name":"g"}],"output":null}],[0,"scene","radiant_rs","Optional scene abstraction.",null,null],[3,"OpId","radiant_rs::scene","An operation-id returned from Scene::op.",null,null],[3,"LayerId","","A layer-id returned from layer registration or creation methods.",null,null],[3,"SpriteId","","A sprite-id returned from sprite registration or creation methods.",null,null],[3,"FontId","","A font-id returned from font registration or creation methods.",null,null],[3,"Scene","","A container for layers, sprites and fonts intended to simplify usage.",null,null],[4,"Op","","A scene-operation.",null,null],[13,"None","","No op",16,null],[13,"SetColor","","Set multiplication color for given layer.",16,null],[13,"SetBlendmode","","Sets the blendmode for given layer.",16,null],[13,"Draw","","Draws given layer.",16,null],[13,"Clear","","Clears given layer.",16,null],[13,"SetViewMatrix","","Set a layer&#39;s view matrix.",16,null],[13,"TranslateViewMatrix","","Translate view matrix by given vector.",16,null],[13,"RotateViewMatrix","","Rotate view matrix by given radians.",16,null],[13,"RotateViewMatrixAt","","Rotate view matrix by given radians around given origin.",16,null],[13,"ScaleViewMatrix","","Scale view matrix by given vector.",16,null],[13,"SetModelMatrix","","Set a layer&#39;s model matrix.",16,null],[13,"TranslateModelMatrix","","Translate model matrix by given vector.",16,null],[13,"RotateModelMatrix","","Rotate model matrix by given radians.",16,null],[13,"RotateModelMatrixAt","","Rotate view matrix by given radians around given origin.",16,null],[13,"ScaleModelMatrix","","Scale model matrix by given vector.",16,null],[8,"VecType","radiant_rs","",null,null],[10,"as_vec3","","",17,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"vec3"}}],[11,"clone","radiant_rs::scene","",18,null],[11,"clone","","",19,null],[11,"clone","","",20,null],[11,"clone","","",21,null],[11,"clone","","",16,null],[11,"default","","",16,{"inputs":[],"output":{"name":"op"}}],[11,"new","","Create a new scene instance.",22,{"inputs":[{"name":"rendercontext"}],"output":{"name":"scene"}}],[11,"op","","Push a layer operation on the scene operation stack.",22,null],[11,"ops","","Push multiple operations on the scene operation stack.",22,null],[11,"clear","","Clear operation stack.",22,null],[11,"sprite","","Draws a sprite onto given layer.",22,null],[11,"sprite_transformed","","Draws a sprite with given rotation and scaling onto given layer.",22,null],[11,"write","","Writes a string onto given layer.",22,null],[11,"create_layer","","Create and add a layer to the scene.",22,null],[11,"create_sprite_from_file","","Create and add a sprite to the scene",22,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"spriteid"}}],[11,"register_sprite","","Register a sprite for the scene.",22,{"inputs":[{"name":"self"},{"name":"sprite"}],"output":{"name":"spriteid"}}],[11,"register_font","","Register a font for the scene.",22,{"inputs":[{"name":"self"},{"name":"font"}],"output":{"name":"fontid"}}],[11,"new","radiant_rs::utils","Creates a new instance with given seed.",23,{"inputs":[{"name":"t"}],"output":{"name":"rng"}}],[11,"get","","Returns a random number between 0.0 and non-inclusive 1.0",23,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"range","","Returns a random number between min and non-inclusive max.",23,{"inputs":[{"name":"self"},{"name":"t"},{"name":"t"}],"output":{"name":"t"}}]],"paths":[[3,"DisplayInfo"],[3,"Sprite"],[3,"FontInfo"],[3,"Color"],[3,"Vec2"],[3,"Vec3"],[4,"ButtonState"],[3,"BlendMode"],[3,"Monitor"],[3,"Display"],[3,"Input"],[3,"Layer"],[3,"Renderer"],[3,"Font"],[3,"RenderContext"],[3,"Mat4"],[4,"Op"],[8,"VecType"],[3,"OpId"],[3,"LayerId"],[3,"SpriteId"],[3,"FontId"],[3,"Scene"],[3,"Rng"]]};
initSearch(searchIndex);
