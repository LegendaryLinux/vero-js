import React from 'react';
import {Popover} from './Popover';

const popoverStyle = {
	backgroundColor: '#f0f0f0',
	color: '#000000',
	padding: '1rem',
	borderRadius: '0.5rem',
	border: '1px solid #000000',
};

export const Demo = () => {
	return (
		<div style={{width: '150vw'}}>
			<Popover content={<p style={popoverStyle}>I am at the top!</p>} placement="left">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu malesuada lorem. Donec fermentum diam magna,
				sit amet tempus lacus maximus nec. Phasellus lectus est, gravida ac lacus eget, egestas eleifend orci.
				Pellentesque venenatis risus vel hendrerit congue. Suspendisse potenti. Integer ut nibh sollicitudin lacus
				vehicula semper. Nam semper dui in enim sodales fringilla et at mi. Vestibulum nec sem lacus. Pellentesque
				scelerisque augue vitae elit bibendum, et pulvinar sem sollicitudin. Sed diam libero, porta eget congue quis,
				lobortis ut felis. Quisque rutrum, nunc non ultrices bibendum, ante ligula efficitur erat, eu lacinia dui diam
				sit amet felis. Sed bibendum venenatis lacinia.
			</Popover>

			<p>
				Nulla id ornare ipsum, vitae tincidunt nisi. Proin sit amet pellentesque nulla. Sed posuere urna maximus sem
				dignissim, at bibendum diam tristique. Suspendisse potenti. Proin eget placerat purus. Nam finibus aliquet
				nulla, sed congue massa efficitur vel. Suspendisse varius dolor in rutrum porttitor. Donec porttitor sed quam
				ac maximus.
			</p>

			<p>
				Nunc suscipit eros vitae risus gravida fermentum. Mauris porta ipsum sed suscipit aliquet. Vestibulum iaculis
				urna vitae aliquam blandit. Nulla dignissim magna ac iaculis porttitor. Suspendisse quis est et sem convallis
				viverra. Aenean at metus id erat venenatis finibus. Pellentesque sagittis sem ut elit aliquet, a semper est
				dignissim.
			</p>

			<p>
				Curabitur at sodales nulla. Morbi eget nunc eu ex interdum euismod. Aliquam lacinia erat justo, scelerisque
				lobortis massa placerat a. Nulla interdum eros ut tellus tincidunt porta. Aliquam erat volutpat. Praesent
				interdum ipsum nec tempor venenatis. Vestibulum scelerisque tincidunt hendrerit. Nulla sodales diam dui,
				bibendum vehicula purus hendrerit in. Aliquam erat volutpat. Pellentesque non dignissim ipsum, nec vulputate
				ante. Suspendisse interdum tincidunt vestibulum. Cras vestibulum mi mi, ac luctus libero ultricies nec. Sed
				consectetur mi at enim malesuada pulvinar. Donec justo nulla, convallis ut dolor at, eleifend molestie lacus.
			</p>

			<p>
				Aenean sit amet velit molestie, accumsan nulla congue, laoreet purus. Sed eget nisi lectus. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id orci eu nulla feugiat
				finibus non vitae nulla. Aliquam aliquam rutrum nibh ac hendrerit. Sed eget arcu diam. Curabitur tincidunt risus
				mi, at facilisis augue porta eu. Aliquam erat volutpat. Sed eget tortor eget sem blandit posuere in in velit.
				Suspendisse semper tortor odio, quis lacinia orci posuere sit amet. Suspendisse potenti. Mauris tincidunt arcu
				et purus faucibus cursus. Mauris id mattis lorem. Nunc eleifend lorem felis, id bibendum neque faucibus ut.
			</p>

			<p>
				Morbi quis purus ac eros condimentum congue. Cras sollicitudin, nunc a pharetra consectetur, velit nulla aliquet
				nibh, vitae rhoncus nisl tellus ut ligula. Suspendisse lobortis justo eu ullamcorper cursus. Aenean viverra ante
				libero, ut accumsan lacus efficitur eu. Phasellus id volutpat justo, eu luctus arcu. Sed et imperdiet nunc.
				Proin ultrices magna eget augue ullamcorper, vel tempor felis aliquam. Fusce ut dolor porta, ultricies ligula
				et, sollicitudin odio. Mauris et metus malesuada, commodo sapien ut, iaculis nunc. Nunc congue nibh augue, at
				vulputate nisi ornare a. Maecenas venenatis turpis vel fermentum lobortis. Vivamus ac arcu quis felis elementum
				hendrerit in vel justo. Duis sodales arcu eu consectetur mollis. Ut ac ex dapibus, gravida libero in, aliquam
				nisi. Nunc venenatis nunc et ante sodales, et facilisis risus condimentum. Duis imperdiet odio eget mauris
				scelerisque gravida.
			</p>

			<p>
				Proin vel risus suscipit, condimentum lacus in, pharetra urna. Cras gravida quam id leo luctus euismod. Donec
				tincidunt erat nunc, non ultricies sapien mattis a. Fusce a vehicula velit. Proin lobortis scelerisque luctus.
				Aliquam posuere volutpat sem, ut pellentesque ex vulputate quis. Mauris non orci magna. Vivamus at tortor nisi.
				Aliquam purus odio, scelerisque convallis porta sit amet, accumsan sit amet odio. Pellentesque ornare, augue at
				lobortis dignissim, sapien leo sollicitudin leo, eu bibendum felis enim imperdiet tortor. Aliquam ultricies
				vestibulum justo semper tempus. Vivamus commodo neque eu nisi vulputate, accumsan pellentesque ligula aliquet.
			</p>

			<p>
				Fusce egestas placerat risus nec dapibus. Phasellus pulvinar sem eget est iaculis volutpat. Mauris nisi arcu,
				rhoncus eget tortor et, fringilla pulvinar metus. Etiam ut tempus lectus, et feugiat nisi. Sed fringilla nunc id
				diam facilisis tristique. Nam tristique vitae lacus quis porta. Quisque egestas nulla ac mi imperdiet varius
				euismod ut purus. Curabitur sapien tellus, sagittis at lacus id, varius tincidunt urna.
			</p>

			<p>
				Mauris facilisis ex lorem, et laoreet velit vehicula vel. Duis ut blandit mi, lacinia venenatis nibh. Proin a
				mauris vel justo rutrum sollicitudin. Phasellus sed vulputate felis. Nunc varius ipsum non posuere pharetra.
				Vestibulum vel mi tellus. Donec et mauris libero. Donec aliquam sollicitudin est, at placerat sem tincidunt non.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vehicula
				nisi sapien, id viverra lectus blandit in. Aliquam erat volutpat. Sed quis ultrices est. Vivamus eget ligula
				non eros congue interdum. Curabitur pulvinar tortor at magna rhoncus, vel rutrum erat ornare. Morbi pharetra
				odio in feugiat varius. Praesent pretium odio tellus, et vehicula mi elementum nec.
			</p>

			<p>
				Donec finibus blandit felis, id laoreet mauris. Morbi ullamcorper tempus pellentesque. Vestibulum et semper
				enim, at interdum nisi. Etiam et vestibulum massa, eget pellentesque nisi. Fusce vitae tellus ac lectus
				dignissim placerat. Donec interdum risus et felis porttitor congue. Suspendisse dui odio, bibendum eu volutpat
				luctus, maximus non lorem. Cras ut elit quis lacus sagittis dignissim in sed risus. Sed condimentum nisl rutrum
				imperdiet dignissim. Phasellus pretium purus vel arcu malesuada interdum. Nam quis luctus enim. Phasellus
				egestas ante leo, sit amet blandit eros posuere faucibus. Phasellus nec quam a augue hendrerit pharetra.
				Curabitur dignissim aliquam dui, at porta sem gravida ut. Ut tortor lacus, egestas sed libero sed, rhoncus
				malesuada ipsum.
			</p>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu malesuada lorem. Donec fermentum diam magna,
				sit amet tempus lacus maximus nec. Phasellus lectus est, gravida ac lacus eget, egestas eleifend orci.
				Pellentesque venenatis risus vel hendrerit congue. Suspendisse potenti. Integer ut nibh sollicitudin lacus
				vehicula semper. Nam semper dui in enim sodales fringilla et at mi. Vestibulum nec sem lacus. Pellentesque
				scelerisque augue vitae elit bibendum, et pulvinar sem sollicitudin. Sed diam libero, porta eget congue quis,
				lobortis ut felis. Quisque rutrum, nunc non ultrices bibendum, ante ligula efficitur erat, eu lacinia dui diam
				sit amet felis. Sed bibendum venenatis lacinia.
			</p>

			<p>
				Nulla id ornare ipsum, vitae tincidunt nisi. Proin sit amet pellentesque nulla. Sed posuere urna maximus sem
				dignissim, at bibendum diam tristique. Suspendisse potenti. Proin eget placerat purus. Nam finibus aliquet
				nulla, sed congue massa efficitur vel. Suspendisse varius dolor in rutrum porttitor. Donec porttitor sed quam
				ac maximus.
			</p>

			<p>
				Nunc suscipit eros vitae risus gravida fermentum. Mauris porta ipsum sed suscipit aliquet. Vestibulum iaculis
				urna vitae aliquam blandit. Nulla dignissim magna ac iaculis porttitor. Suspendisse quis est et sem convallis
				viverra. Aenean at metus id erat venenatis finibus. Pellentesque sagittis sem ut elit aliquet, a semper est
				dignissim.
			</p>

			<p>
				Curabitur at sodales nulla. Morbi eget nunc eu ex interdum euismod. Aliquam lacinia erat justo, scelerisque
				lobortis massa placerat a. Nulla interdum eros ut tellus tincidunt porta. Aliquam erat volutpat. Praesent
				interdum ipsum nec tempor venenatis. Vestibulum scelerisque tincidunt hendrerit. Nulla sodales diam dui,
				bibendum vehicula purus hendrerit in. Aliquam erat volutpat. Pellentesque non dignissim ipsum, nec vulputate
				ante. Suspendisse interdum tincidunt vestibulum. Cras vestibulum mi mi, ac luctus libero ultricies nec. Sed
				consectetur mi at enim malesuada pulvinar. Donec justo nulla, convallis ut dolor at, eleifend molestie lacus.
			</p>

			<p>
				Aenean sit amet velit molestie, accumsan nulla congue, laoreet purus. Sed eget nisi lectus. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id orci eu nulla feugiat
				finibus non vitae nulla. Aliquam aliquam rutrum nibh ac hendrerit. Sed eget arcu diam. Curabitur tincidunt risus
				mi, at facilisis augue porta eu. Aliquam erat volutpat. Sed eget tortor eget sem blandit posuere in in velit.
				Suspendisse semper tortor odio, quis lacinia orci posuere sit amet. Suspendisse potenti. Mauris tincidunt arcu
				et purus faucibus cursus. Mauris id mattis lorem. Nunc eleifend lorem felis, id bibendum neque faucibus ut.
			</p>

			<p>
				Morbi quis purus ac eros condimentum congue. Cras sollicitudin, nunc a pharetra consectetur, velit nulla aliquet
				nibh, vitae rhoncus nisl tellus ut ligula. Suspendisse lobortis justo eu ullamcorper cursus. Aenean viverra ante
				libero, ut accumsan lacus efficitur eu. Phasellus id volutpat justo, eu luctus arcu. Sed et imperdiet nunc.
				Proin ultrices magna eget augue ullamcorper, vel tempor felis aliquam. Fusce ut dolor porta, ultricies ligula
				et, sollicitudin odio. Mauris et metus malesuada, commodo sapien ut, iaculis nunc. Nunc congue nibh augue, at
				vulputate nisi ornare a. Maecenas venenatis turpis vel fermentum lobortis. Vivamus ac arcu quis felis elementum
				hendrerit in vel justo. Duis sodales arcu eu consectetur mollis. Ut ac ex dapibus, gravida libero in, aliquam
				nisi. Nunc venenatis nunc et ante sodales, et facilisis risus condimentum. Duis imperdiet odio eget mauris
				scelerisque gravida.
			</p>

			<p>
				Proin vel risus suscipit, condimentum lacus in, pharetra urna. Cras gravida quam id leo luctus euismod. Donec
				tincidunt erat nunc, non ultricies sapien mattis a. Fusce a vehicula velit. Proin lobortis scelerisque luctus.
				Aliquam posuere volutpat sem, ut pellentesque ex vulputate quis. Mauris non orci magna. Vivamus at tortor nisi.
				Aliquam purus odio, scelerisque convallis porta sit amet, accumsan sit amet odio. Pellentesque ornare, augue at
				lobortis dignissim, sapien leo sollicitudin leo, eu bibendum felis enim imperdiet tortor. Aliquam ultricies
				vestibulum justo semper tempus. Vivamus commodo neque eu nisi vulputate, accumsan pellentesque ligula aliquet.
			</p>

			<p>
				Fusce egestas placerat risus nec dapibus. Phasellus pulvinar sem eget est iaculis volutpat. Mauris nisi arcu,
				rhoncus eget tortor et, fringilla pulvinar metus. Etiam ut tempus lectus, et feugiat nisi. Sed fringilla nunc id
				diam facilisis tristique. Nam tristique vitae lacus quis porta. Quisque egestas nulla ac mi imperdiet varius
				euismod ut purus. Curabitur sapien tellus, sagittis at lacus id, varius tincidunt urna.
			</p>

			<p>
				Mauris facilisis ex lorem, et laoreet velit vehicula vel. Duis ut blandit mi, lacinia venenatis nibh. Proin a
				mauris vel justo rutrum sollicitudin. Phasellus sed vulputate felis. Nunc varius ipsum non posuere pharetra.
				Vestibulum vel mi tellus. Donec et mauris libero. Donec aliquam sollicitudin est, at placerat sem tincidunt non.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vehicula
				nisi sapien, id viverra lectus blandit in. Aliquam erat volutpat. Sed quis ultrices est. Vivamus eget ligula
				non eros congue interdum. Curabitur pulvinar tortor at magna rhoncus, vel rutrum erat ornare. Morbi pharetra
				odio in feugiat varius. Praesent pretium odio tellus, et vehicula mi elementum nec.
			</p>

			<Popover content={<p style={popoverStyle}>I am at the bottom!</p>} placement="top">
				Donec finibus blandit felis, id laoreet mauris. Morbi ullamcorper tempus pellentesque. Vestibulum et semper
				enim, at interdum nisi. Etiam et vestibulum massa, eget pellentesque nisi. Fusce vitae tellus ac lectus
				dignissim placerat. Donec interdum risus et felis porttitor congue. Suspendisse dui odio, bibendum eu volutpat
				luctus, maximus non lorem. Cras ut elit quis lacus sagittis dignissim in sed risus. Sed condimentum nisl rutrum
				imperdiet dignissim. Phasellus pretium purus vel arcu malesuada interdum. Nam quis luctus enim. Phasellus
				egestas ante leo, sit amet blandit eros posuere faucibus. Phasellus nec quam a augue hendrerit pharetra.
				Curabitur dignissim aliquam dui, at porta sem gravida ut. Ut tortor lacus, egestas sed libero sed, rhoncus
				malesuada ipsum.
			</Popover>
		</div>
	);
};
