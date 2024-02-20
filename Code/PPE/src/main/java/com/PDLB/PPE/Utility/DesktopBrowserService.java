package com.PDLB.PPE.Utility;

import com.PDLB.PPE.graphic.Maingraphics;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

/**
 * Service for opening a web browser on the user's desktop.
 * This service provides functionality to open a specified URL in the default web browser.
 */
@Profile("!test")
@Service
public class DesktopBrowserService{

    /**
     * Event listener method triggered when the application is ready.
     * This method initializes the main graphics and opens the default web browser to the specified URL.
     */
    @EventListener({ApplicationReadyEvent.class})
    void applicationReadyEvent() {
        Maingraphics.appRun();
        browse("http://localhost:8080");
    }

    /**
     * Opens the default web browser to the specified URL.
     * If the Desktop API is supported, it opens the URL using the Desktop class.
     * If not supported, it attempts to open the URL using a system command.
     * @param url The URL to open in the web browser.
     */
    public static void browse(String url) {
        if(Desktop.isDesktopSupported()){
            Desktop desktop = Desktop.getDesktop();
            try {
                desktop.browse(new URI(url));
            } catch (IOException | URISyntaxException e) {
                e.printStackTrace();
            }
        }else{
            Runtime runtime = Runtime.getRuntime();
            try {
                runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
