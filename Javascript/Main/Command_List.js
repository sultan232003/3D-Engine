const Command_List = document.getElementById("Command_list")
const Close = document.getElementById("close")
const Left = document.getElementById("left")
const Right = document.getElementById("right")
const Left_bar = document.getElementById("left_bar")
const Right_bar = document.getElementById("right_bar")
const Command_list_btn = document.getElementById("command_list_btn")
const Error_box = document.getElementById("error_box")
const error_box_height = Error_box.clientHeight
const Error_message = document.getElementById("error_message")
let transition = "all 200ms ease-out"

if (Command_List.classList.contains("active")) {
    Command_list_btn.style.cssText = `opacity: 0; visibility: hidden; transform: translate(-50%, -100%); `
} else if (Command_List.classList.contains("unactive")) {
    Command_list_btn.style.cssText = `opacity: 1; visibility: visible; transform: translate(-50%, 0%); `
}

Command_list_btn.addEventListener("click", (e) => {
    Command_List.classList.add("active")
    Command_List.classList.remove("unactive")
    Command_List.style.cssText = `transform: translateY(-50%) translateX(-50%); left:50 ; top : 50%; transition: ${transition}; visibility: visible; display: block;`
    Command_list_btn.style.cssText = `transition: ${transition}; transform: translate(-50%, -100%); `
})

Close.addEventListener("click", (e) => {
    Command_list_btn.style.cssText = `transition: ${transition}; transform: translate(-50%, 0%);`
    if (Command_List.classList.contains("left")) {
        Command_List.style.cssText = `transform: translateY(calc(-50% + -150%)) translateX(0%); left:0 ;  transition: ${transition}; visibility: visible; display: block; width: 350px;`
    } else if (Command_List.classList.contains("right")) {
        Command_List.style.cssText = `transform: translateY(calc(-50% + -150%)) translateX(0%); left:revert ; right:0;  transition: ${transition}; visibility: visible; display: block; width: 350px;`
    } else {
        Command_List.style.cssText = `transform: translateY(calc(-50% + -150%)) translateX(-50%); left:50%; transition: ${transition}; visibility: visible; display: block;`
    }
    Command_List.classList.add("unactive")
    Command_List.classList.remove("active", "left", "right")
    setTimeout(() => {
        Command_List.style.cssText = ` left:50%; transform: translateY(calc(-50% + -150%)) translateX(-50%);`
    }, 300);
})

Left.addEventListener("click", (e) => {
    Command_List.classList.remove("right")
    Command_List.classList.add("left")
    Command_List.style.cssText = ` left: 0px; transform: translate(0% , 0%); transition: ${transition}; visibility: visible; display: block; width: 350px; top: 0; height: 100%;`
})

Right.addEventListener("click", (e) => {
    Command_List.classList.remove("left")
    Command_List.classList.add("right")
    Command_List.style.cssText = ` right: 0px; left: revert ; transform: translate(0% , 0%); transition: ${transition}; visibility: visible; display: block; width: 350px; top: 0; height: 100%;`
})

Left.addEventListener("mouseenter", (e) => {
    Left_bar.style.cssText = ` visibility: visible; opacity: 1;transition: ${transition}; `
})
Left.addEventListener("mouseleave", (e) => {
    Left_bar.style.cssText = ` visibility: hidden; opacity: 0;transition: ${transition}; `
})

Right.addEventListener("mouseenter", (e) => {
    Right_bar.style.cssText = ` visibility: visible; opacity: 1;transition: ${transition}; `
})
Right.addEventListener("mouseleave", (e) => {
    Right_bar.style.cssText = ` visibility: hidden; opacity: 0;transition: ${transition}; `
})


////////////////////////////// CODE FOR CREATE SHAPE BOX //////////////////////////////


const Create = document.getElementById("create")
const Create_Close = document.getElementById("create_close")
const Create_height = Create.clientHeight
const Create_width = Create.clientWidth
const Size = document.getElementById("size")
const Shape = document.getElementById("shape")
const Border = document.getElementById("Border")
const Fill = document.getElementById("Fill")
Fill.checked = true
const Create_btn = document.getElementById("create_btn")
const Command_Key_List = ["c", "m", "s", "o"]

document.addEventListener('keypress', (e) => {
    let keypressed = e.key
    if (keypressed == "c") {
        Create.classList.add("active")
        if (mouseX > window.innerWidth - Create_width) {
            Create.style.cssText = `transform : translate(${mouseX - Create_width}px, ${mouseY}px);`
        }
        if (mouseY > window.innerHeight - Create_height) {
            Create.style.cssText = `transform : translate(${mouseX}px, ${mouseY - Create_height}px);`
        }
        if (mouseX > (window.innerWidth - Create_width) && mouseY > (window.innerHeight - Create_height)) {
            Create.style.cssText = `transform : translate(${mouseX - Create_width}px, ${mouseY - Create_height}px);`
        }
        if (mouseX < (window.innerWidth - Create_width) && mouseY < (window.innerHeight - Create_height)) {
            Create.style.cssText = `transform : translate(${mouseX}px, ${mouseY}px);`
        }
    }
})

const reset_clear = () => {
    Shape.value = "cube"
    Size.value = ""
    Border.checked = false
    Fill.checked = true
}

Create_Close.addEventListener('click', () => {
    Create.classList.remove("active")
    reset_clear()
})

Create_btn.addEventListener("click", () => {
    if (Size.value == 0) {
        Error_message.innerHTML = "Please enter a valid Size Value"
        Error_box.style.cssText = `bottom : ${error_box_height}px; transition:all 100ms ease-out`
        setTimeout(() => {
            Error_box.style.cssText = `bottom : 0px; transition:all 100ms ease-out`
        }, 5000);
    } else if (Border.checked == false && Fill.checked == false) {
        print("error")
        Error_message.innerHTML = "Please check either Border or Fill"
        Error_box.style.cssText = `bottom : ${error_box_height}px; transition:all 100ms ease-out`
        setTimeout(() => {
            Error_box.style.cssText = `bottom : 0px; transition:all 100ms ease-out`
        }, 5000);
    } else {
        Create.classList.remove("active")
        sculpture.push(new create(mouseX - centerX, mouseY - centerY, 0, Number(Size.value), Number(Size.value), Number(Size.value), 0, 0, 0, eval(Shape.value), Border.checked, Fill.checked))
        // sculpture[sculpture.length - 1].drag()
        sculpture[sculpture.length - 1].move()
        sculpture[sculpture.length - 1].index = sculpture.length
        reset_clear()
    }
})



////////////////////////////// CODE FOR OPTIONS MENU POPUP BOX //////////////////////////////



const Option_box = document.getElementById("optionbox")
const Reset_button = document.getElementById("reset")
const Reset_X = document.getElementById("reset_x")
const Reset_Y = document.getElementById("reset_y")
const Reset_Z = document.getElementById("reset_z")
const Reset_Rotate_X = document.getElementById("reset_rotate_x")
const Reset_Rotate_Y = document.getElementById("reset_rotate_y")
const Reset_Rotate_Z = document.getElementById("reset_rotate_z")
let option_index

document.addEventListener("mousedown", (e) => {
    let x = e.clientX - centerX
    let y = e.clientY - centerY
    if (e.button == 2) {
        Option_box.style.cssText = `transform: translate(${e.clientX}px, ${e.clientY}px);`
        Option_box.classList.add("active")
        const check_option_index = (sculpt) => {
            if (x >= (sculpt.x - sculpt.scale_X) && x <= (sculpt.x + sculpt.scale_X) && y >= (sculpt.y - sculpt.scale_y) && y <= (sculpt.y + sculpt.scale_y)) {
                return sculpt
            }
        }
        option_index = sculpture.findIndex(check_option_index)
    }
    if (Option_box.classList.contains("active") && e.button == 0) {
        Option_box.classList.remove("active")
    }
})

Reset_button.addEventListener("mousedown", () => {
    if(option_index >= 0){
        sculpture[option_index].x = sculpture[option_index].origin_x
        sculpture[option_index].y = sculpture[option_index].origin_y
        sculpture[option_index].z = sculpture[option_index].origin_z
        sculpture[option_index].rotate_X = 0
        sculpture[option_index].rotate_Y = 0
        sculpture[option_index].rotate_Z = 0
    }
})
Reset_X.addEventListener("mousedown",()=>{
    if(option_index >= 0){
        sculpture[option_index].x = sculpture[option_index].origin_x
    }
})
Reset_Y.addEventListener("mousedown",()=>{
    if(option_index >= 0){
        sculpture[option_index].y = sculpture[option_index].origin_y
    }
})
Reset_Z.addEventListener("mousedown",()=>{
    if(option_index >= 0){
        sculpture[option_index].z = sculpture[option_index].origin_z
    }
})
Reset_Rotate_X.addEventListener("mousedown",()=>{
    if(option_index >= 0){
        sculpture[option_index].rotate_X = 0
    }
})
Reset_Rotate_Y.addEventListener("mousedown",()=>{
    if(option_index >= 0){
        sculpture[option_index].rotate_Y = 0
    }
})
Reset_Rotate_Z.addEventListener("mousedown",()=>{
    if(option_index >= 0){
        sculpture[option_index].rotate_Z = 0
    }
})