class Points {
    constructor (point_x , point_y , point_z , point_w) {
        this.origin = vector.create(0,0,0,0)
        this.point_x = point_x
        this.point_y = point_y
        this.point_z = point_z
        this.point_w = point_w
        this.new_point_x
        this.new_point_y
        this.new_point_z
    }
    
    update_origin(){
        document.addEventListener("mousedown",(e)=>{

            // document.addEventListener("mousemove",(e)=>{
                this.origin.x = e.clientX-(window.innerWidth/2)
                this.origin.y = e.clientY-(window.innerHeight/2)
            // })
        })
        this.new_point_x = this.point_x - this.origin.x
        // this.point_x = this.new_point_x
        this.new_point_y = this.point_y - this.origin.y
        // this.point_y = this.new_point_y
        this.new_point_z = this.point_z - this.origin.z
        // this.point_z = this.new_point_z
    }

    draw(){
        drawCircle(this.new_point_x,this.new_point_y,5,"#ffffff")
        drawCircle(this.origin.x,this.origin.y,5,"green")
    }
}

