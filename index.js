function scene(  ){
	let tl = gsap.timeline(  );
	tl.from( 'form',{
		duration: 0.3,
		opacity: 0,
		ease: 'power1.inOut'
	} );
	tl.from( 'label, input, button',{
		duration: 1,
		stagger: .1,
		x: '100vw',
		opacity: 0,
		ease: 'power1.inOut'
	} );
	return tl
}

let master = gsap.timeline(  ).add( scene(  ) );