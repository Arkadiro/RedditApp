<template>
    <div>
        <div class="container">
            <div class="float-left mr-5">
                <form>
                    <button v-on:click.prevent="frame++">Click me to start</button><br><br>
                    <input type="text" v-model="rgb1"><br>
                    <label>Color (r)</label><br>
                    <input type="text" v-model="rgb2"><br>
                    <label>Color  (g)</label><br>
                </form>
            </div>
                <canvas id="first"  width="768" height="768" style="border : solid 1px black"></canvas>
        </div>  
        
    </div>
</template>

<script>
export default {
    name: 'first',
    data(){
        return {
            counter: 0,
            WJulia:768,
            HJulia:768,
            cx: 0, 
            cy:0, 
            kat1:0, 
            kat2:1,
            ctx:{},
            imgJulia:{},
            idJulia:'',
            pixJulia:{},
            frame:0,
            rgb1:255,
            rgb2:255,    
        }    
        
    },
    watch:{
        frame: function(value){
            let vm = this;
            vm.newUpdate()
            setTimeout(function(){
                vm.LoopJulia();
            }, 70)
        }
    },
    methods: {
        newUpdate: function (){
            let canvas = document.getElementById('first');

            if (canvas && canvas.getContext){
            this.ctx = canvas.getContext('2d');
                if(this.ctx){
                    this.ctx.font = "bold 12px sans-serif";
                    this.ctx.fillStyle = 0;
                    if(!this.ctx.createImageData)
                        this.imgJulia = this.ctx.createImageData(this.WJulia, this.HJulia);
                    else
                        this.imgJulia = this.ctx.getImageData(0, 0, this.WJulia, this.HJulia);
                    this.pixJulia = this.imgJulia.data; 
                }               
            }
        },
        LoopJulia(){
            this.kat1 += 0.003;
            this.kat2 += 0.007;
            this.cx = 981 * Math.sin(this.kat1);
            this.cy = 983 * Math.cos(this.kat2);
            this.frame++;

            //creating a bit image
            this.DrawJulie();
            
            //copying a bit image to context / canvas
            this.ctx.putImageData( this.imgJulia, 0, 0 );
            this.ctx.fillText( this.frame, 20, 20 );
            
        },
        DrawJulie(){
                    var px = 0;
                    for (var i = -2304; i < 2304; i = i + 6){
                        var py = 0;
                        for (var j = -2304; j < 2304; j = j + 6){
                            var c = 0;
                            var x = i;
                            var y = j;
                            var x2 = x * x;
                            var y2 = y * y;
                            while (((x2 + y2) < 4000000) && (c < 31))
                            {
                                c++;
                                y  = ((x * y) >> 9) + this.cy;
                                x  = ((x2 - y2) >> 10) + this.cx;
                                x2 = x * x;
                                y2 = y * y;
                            }
                            this.SetPixelColor( 
                                this.pixJulia, 
                                (py * this.WJulia + px) << 2, 
                                this.rgb1, 
                                this.rgb2-(8 * c), 
                                255-(6 * c), 
                                255 - c 
                            )
                            py++;
                        }
                        px++;
                    }
            },
        SetPixelColor(pix, offs, a, r, g, b){         
                    pix[offs++] = r;
                    pix[offs++] = g;
                    pix[offs++] = b;
                    pix[offs] = a;
        },
        // updateCanvas: function (){
        //     clearInterval( this.idJulia );
        //     let canvas = document.getElementById('first');

        //     if (canvas && canvas.getContext){
        //     this.ctx = canvas.getContext('2d');
        //         if(this.ctx){
        //             this.ctx.font = "bold 12px sans-serif";
        //             this.ctx.fillStyle = 0;
        //             if(!this.ctx.createImageData)
        //                 this.imgJulia = this.ctx.createImageData(this.WJulia, this.HJulia);
        //             else
        //                 this.imgJulia = this.ctx.getImageData(0, 0, this.WJulia, this.HJulia);

        //             this.pixJulia = this.imgJulia.data; 
        //         }               
        //     }
        //         this.idJulia = setInterval(this.LoopJulia, 20);
        // },

    },
    // mounted: function (){
    //     this.updateCanvas();
    // }
}
</script>
