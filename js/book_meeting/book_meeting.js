(() => {
    const allDatePickers = [].slice.call(document.querySelectorAll('#datepicker'))

    allDatePickers.forEach(function (element) {
        const picker = new easepick.create({
            element: element,
            css: [
                'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
            ],
        });

    })  
    

    const triggerMeetingList = [].slice.call(document.querySelectorAll('#bookMeetingRoom option'))
    
            triggerMeetingList.forEach(function (triggerEl) {
                // console.log('trigger ', triggerEl)

                // console.log('click yay', triggerEl, )

                    triggerEl.addEventListener('change', function (event) {
                        console.log("inside options ")
                        event.preventDefault()
                        const meetingName = triggerEl.value
                        const meetingID = triggerEl.id
                        // console.log('click yay', triggerEl, )
                        // console.log('click Name', meetingName )
                        triggerMeetingList.forEach(function (triggerE2) {
                            const meetingSelected = triggerE2.value
                            const meetingAltID = triggerE2.id
                            if(meetingName == meetingSelected ) {
                                console.log('click Name 2', meetingID)
                                const meetingContent = document.querySelector('.meeting-content #' + meetingID)              
                                meetingContent.classList.add('show', 'active')

                            } else {
                                console.log('Click Name 4', meetingAltID)
                                const meetingAltContent = document.querySelector('.meeting-content #' + meetingAltID)
                                meetingAltContent.classList.remove('show', 'active')
                                
                            } 

                        })
                       
            })
            })


            const selectMeetingRoom = document.getElementById('bookMeetingRoom');

            selectMeetingRoom.addEventListener('change', function() {
              const selectedMeeting = selectMeetingRoom.value;
              console.log('selectedMeeting',  selectedMeeting)
              const meetingContentElements = document.querySelectorAll('#bookMeetingRoom > option');
            
              meetingContentElements.forEach(function(element) {
                const meetingContainer = document.querySelector('.meetRoom_container')   
                // console.log(element)
                if(selectedMeeting == "None"){           
                    meetingContainer.classList.add('hide')
                    meetingContainer.classList.remove('show')
                } else {
                    meetingContainer.classList.add('show')
                    meetingContainer.classList.remove('hide')
                }
                if (element.value === selectedMeeting) {
                    const meetingID = element.id
                    const meetingContent = document.querySelector('.meeting-content #' + meetingID)              
                    meetingContent.classList.add('show', 'active')
                } else {
                    const meetingID = element.id
                    const meetingContent = document.querySelector('.meeting-content #' + meetingID)  
                    meetingContent.classList.remove('show', 'active');
                }
              });
            });
            
            
            
            
            



                         // <option id="none" value="None" selected="selected">None</option>
                        // <option id="Bute" value="Bute suite 2">Bute suite 2</option>
                        // <option id="Jubliee" value="Jubliee Suite">Jubliee Suite</option>
                        // <option id="sophia1" value="Sophia Suite 1">Sophia Suite 1</option>
                        // <option id="sophia2" value="Sophia Suite 2">Sophia Suite 2</option>
                        // <option id="sophia3" value="Sophia Suite 3">Sophia Suite 3</option>
                        // <option id="taff1" value="Taff Suite 1">Taff Suite 1</option>
                        // <option id="taff2" value="Taff Suite 2">Taff Suite 2</option>
                        // <option id="conference" value="Conference Suite">Conference Suite</option>



})()