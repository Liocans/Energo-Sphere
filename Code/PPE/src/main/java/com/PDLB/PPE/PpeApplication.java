package com.PDLB.PPE;

import com.PDLB.PPE.graphic.Maingraphics;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class PpeApplication {

    private static Thread springThread;
    public static void main(String[] args) {
        springThread = new Thread(() -> Maingraphics.main(args));
        springThread.start();
        SpringApplication.run(PpeApplication.class, args);
    }


    public static Thread getSpringThread() {
        return springThread;
    }
}
