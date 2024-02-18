package com.mercatus
import android.os.Bundle;
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.core.view.WindowCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen;

class MainActivity : ReactActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    val windowInsetsController =
        WindowCompat.getInsetsController(window, window.decorView)
    // Configure the behavior of the hidden system bars.
    windowInsetsController.systemBarsBehavior =
        WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE

    window.decorView.setOnApplyWindowInsetsListener { view, windowInsets ->
        // You can hide the caption bar even when the other system bars are visible.
        // To account for this, explicitly check the visibility of navigationBars()
        // and statusBars() rather than checking the visibility of systemBars().
        if (windowInsets.isVisible(WindowInsetsCompat.Type.navigationBars())) {
                // Hide both the status bar and the navigation bar.
                windowInsetsController.hide(WindowInsetsCompat.Type.navigationBars())
        }
        else {
                windowInsetsController.show(WindowInsetsCompat.Type.navigationBars())
        }
        
        view.onApplyWindowInsets(windowInsets)
      }

    SplashScreen.show(this) // here
    super.onCreate(savedInstanceState)
}


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "mercatus"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)


    
 
}


