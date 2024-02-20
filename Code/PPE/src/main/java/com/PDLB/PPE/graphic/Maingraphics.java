package com.PDLB.PPE.graphic;

import com.PDLB.PPE.Utility.DesktopBrowserService;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;

import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

/**
 * This class represents the main graphics interface for the Energo Sphere application.
 */
public class Maingraphics extends Application implements Initializable {
    @FXML
    private Label stateLabel;
    private static Label staticLabel;

    /**
     * The entry point of the application.
     *
     * @param args The command line arguments.
     */
    public static void main(String[] args){
        launch(args);
    }

    /**
     * Initializes and starts the JavaFX application.
     *
     * @param primaryStage The primary stage of the application.
     * @throws IOException If an error occurs while loading the FXML file.
     */
    @Override
    public void start(Stage primaryStage) throws IOException {
        primaryStage.setResizable(false);
        primaryStage.getIcons().add(new Image(getClass().getResourceAsStream("/logo/logo.png")));
        Parent root = FXMLLoader.load(getClass().getResource("/fxml/state-view.fxml"));
        primaryStage.setTitle("Energo Sphere Status");
        primaryStage.setScene(new Scene(root));
        primaryStage.setOnCloseRequest(e -> {
            closeApp();
            Platform.exit();
        });
        primaryStage.show();
    }

    /**
     * Show the popup window
     */
    public void showPopup() throws Exception {
        LoginList loginList = new LoginList();
        loginList.display();
    }

    /**
     * Closes the application.
     */
    public void closeApp() {
        System.exit(0);
    }

    /**
     * Updates the label to indicate that the application is running.
     */
    public static void appRun(){
        Platform.runLater(() -> staticLabel.setText("The application is running"));
    }

    /**
     * Opens the default web browser to the app.
     */
    public void openLinkToApp(){
        DesktopBrowserService.browse("http://localhost:8080");
    }

    /**
     * Opens the default web browser to the javadoc.
     */
    public void openLinkToJavaDoc(){
        DesktopBrowserService.browse("http://localhost:63342/PPE/PPE.main/JavaDoc/index.html");
    }
    /**
     * Initializes the controller after its root element has been completely processed.
     *
     * @param location  The location used to resolve relative paths for the root object.
     * @param resources The resources used to localize the root object.
     */
    @Override
    public void initialize(URL location, ResourceBundle resources) {
        staticLabel = stateLabel;
    }
}
