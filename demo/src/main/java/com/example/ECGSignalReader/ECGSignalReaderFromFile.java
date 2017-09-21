/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.ECGSignalReader;

import com.example.model.ECG;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Service;

/**
 *
 * @author Andrés Felipe
 */
@Service
public class ECGSignalReaderFromFile implements ECGSignalReader{
    private static ArrayList<String> samples=new ArrayList<String>();
    @Override
    public ECG getSignal() {
        ECG ans= new ECG();
        ans.setDate(Calendar.getInstance());
        ans.setFrequency(250);
        if(samples.isEmpty()){
            try {
                FileReader fr = new FileReader("/home/alejandra/Descargas/Prototipo hecho a mano/demo/resources/samples.txt");
                BufferedReader textReader = new BufferedReader(fr);
                String line;
                while((line = textReader.readLine()) != null){
                    samples.add(line);
                }
            } catch (FileNotFoundException ex) {
                Logger.getLogger(ECGSignalReaderFromFile.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                Logger.getLogger(ECGSignalReaderFromFile.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        ans.setValue(Integer.parseInt(samples.get(0)));
        samples.add(samples.remove(0));
        return ans;
    }
    
}
