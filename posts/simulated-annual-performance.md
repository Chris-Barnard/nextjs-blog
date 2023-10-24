---
title: 'Simulations of Annual Performance'
date: '2023-10-24'
image: '/assets/blog/simulated-annual-performance/sample-runs.png'
blurb: "In this exercise, I'll simulate the results of 1,000 traders all trading for a year with my expected performance. The idea of this exercise being to look at what is the distribution of results I should expect, given my current level of skill in the market."
---

In my last post, I wrote a little about the important performance metrics that make up the *Trading Triangle* as well as some metrics that can be derived from these variables, such as *Profit Factor*.
Today I want to delve into why these metrics are my focus, by looking at things through the lens of probability.
To do this, we are going to examine some different simulations of trading results that a trader could experience over the course of a year, based on their metrics from the *Trading Triangle*.
If you need a refresher on how to calculate these metrics for yourself, head over to my [post](/posts/trading-triangle/) on this subject.

### My YTD Metrics for 2023

To begin, this exercise will assume that my metrics from this year are my actual expected performance, as this sample is the best I have at this point.
As we go through this exercise, you'll likely be surprised at the large variation of results that can occur in a given year, for a given trading level of trading skill.
In one year, a given trader's results can vary quite highly, based on how "lucky" they were, even with the same expected performance.

This year, on my trades closed YTD, I have achieved the following metrics
 - **Win Percentage**: 19.78%
 - **Profit to Loss Ratio**: 4.815
 - **Profit Factor**: 1.187

## Setting up the Simulation

In this exercise, I'll simulate the results of 1,000 traders all trading for a year with my expected performance., which for this purpose I'm using 120 trades as a year, as this is my expected approximate number of trades for this year.

On each trade, the simulation will either pick it as a winner, or a loser, with a probability of winning of 19.78%.
The winning trades will be 4.815 times larger than the losing trades.

Each trader will start with $150,000 of capital, and will have an *Average Loss* of $297.46 and an *Average Win* of $1,432.29.
Our traders won't be scaling up or down their risk amount as capital grows, but will trade off a fixed NAV of the 150,000.

### What are we Looking for?

The idea of this exercise being to look at what is the distribution of results I should expect, given my current level of skill in the market.
 - How likely am I to have a positive year?
 - What are the best and worst performing years?
 - What is the mean performance?
 - How are these results distributed?

## The Results

#### Distribution of End of Year Profit and Loss

![Distribution of Results](/assets/blog/simulated-annual-performance/distribution-chris.png)

#### Resulting Metrics

 - **Sample Size**: 1,000 Trading Years consisting of 120 trades / year
 - **EV (Calculated)**: $5,361.87
 - **EV (Simulated)**: $5,206.19
 - **SD (Simulated)**: $7,485.12
 - **Worst Year**: -$14,938.45
 - **Best Year**: $33,494.49

#### How Many Years Made a Profit?

 - 767 years had an ending profit, while 233 years ended at a loss.

#### Confidence Intervals

 - **70%**: $629.28 - $9,278.02
 - **95%**: -$6,289.71 - $17,926.76
 - **99.7%**: -$13,208.71 - $28,305.25

#### Equity Graphs

I have cherry picked some individual samples to display on a graph.
We have our best and worst performers, as well as samples that finish around our 70 and 95% confidence intervals, as well as our median.
![Sample of Runs](/assets/blog/simulated-annual-performance/sample-runs.png)

Do you find it surprising the magnitude of difference between the different possible results?
Remember that these are all traders of the same skill, with the same chances of profit on each trade.
In the real world, you have to keep yourself together when you start off your year like **trader_509**, or your results will fare even worse!

---
# How Would the Experience of a Market Wizard Compare?

In the previous section we looked at how 1,000 traders of my skill level would fare over a year of trading, by taking my YTD performance metrics and using those as a proxy of my current skill level.
This assumes that my current results YTD are representative of my expected metrics going forward, and as we've seen, there can be significant deviation in a given year in how you actually perform vs your actual expectation.
Thus, my current results could easily be representative of a losing trader on a lucky streak.
This magnifies the potential risk that we saw in our second scenario above.

I was curious how the simulation would look, if instead of 1,000 traders of my skill level, it was 1,000 traders with world class skills at trading.

I was on a webinar recently where market wizard Peter Brandt [(@PeterLBrandt)](https://twitter.com/PeterLBrandt) shared his performance statistics for YTD 2023.
His *Win Percentage* was 50.4% with a *Profit Factor* of 4.0.

I'll run another simulation for this post using Peter's statistics as the basis of skill for each of the simulated traders.

### Results

![Distribution of Peter Skilled Results](/assets/blog/simulated-annual-performance/distribution-peter.png)

#### Resulting Metrics

 - **Sample Size**: 1,000 Trading Years consisting of 120 trades / year
 - **EV (Calculated)**: $53,177.62
 - **EV (Simulated)**: $52,943.98
 - **SD (Simulated)**: $8,024.36
 - **Worst Year**: $20,144.12
 - **Best Year**: $78,922.60

#### How Many Years Made a Profit?

 - 1,000 years had an ending profit, while 0 years ended at a loss.

#### Confidence Intervals

 - **70%**: $49,533.36 - $56,880.67
 - **95%**: $39,247.13 - $65,697.44
 - **99.7%**: $30,425.95 - $75,983.67

### Observations

The simulated Peters performed very differently.
First off, not a single one of them had a losing year!
The 70% confidence interval is tightly clustered around the mean, which is a very admirable 33% percent return on the $150k starting capital.
This is especially impressive considering the fact that every single one of them was positive.
It really stresses to me the importance of improving your skills as a trader, and using your performance metrics such as *Profit Factor* as the yardstick for the level of skill that you're at.

![Sample of Peter Skilled Traders](/assets/blog/simulated-annual-performance/sample-runs-peter.png)

When you look at the distribution of equity curves, the worst year is still a pretty solid performance by most people's book.
They all look like a line that trends up and to the right.

# Final Conclusions

#### My Stats vs Peter's
 - **Win Percentage**: 19.78% vs 50.4%
 - **Profit Factor**: 1.187 vs 4.0

The *Profit Factor* is such a good measure of skill because it is a measure of **return** / **risk**.
While anyone can find themselves in a good trade that provides a solid, or even excellent return, it is this measure of the ratio of return to risk that is so important, as it is what allows you to really stack your results over time.
If you are constantly giving back your returns to the market because your risk is higher, then you aren't able to make as much progress on growing your capital.

The simulated results based on Peter's statistics really exemplify this.
I found it interesting to note that in comparing his 99.7% confidence interval to mine, there isn't much difference in the variance.

Variance in 99.7 Confidence Intervals:
 - Peter: $75,983.67 - $30,425.95 = $45,557.72 
 - Chris: $28,305.25 - -$13,208.71 = $41,513.96

The difference is that his bell curve is shifted far to the right.

#### Embracing the Variance

I find it comforting to look at the results a trader is likely to experience and the variance around them, and then to compare that to the experience a trader would be likely to experience at a different skill level.
Everyone will have moments where things go in their favor and times when they aren't.
But, by focusing on the things you can control and improving your strategy and execution, you allow your skill edge to develop and ultimately to play out over time.
