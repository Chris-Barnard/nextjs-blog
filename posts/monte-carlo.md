---
title: 'Monte Carlo Simulations of Annual Performance'
date: '2023-10-17'
image: '/assets/blog/monte-carlo/sample-runs.png'
blurb: "In this exercise, I'll simulate the results of 1,000 traders all trading for a year with my expected performance. The idea of this exercise being to look at what is the distribution of results I should expect, given my current level of skill in the market."
---

Last week I wrote a little about some important performance metrics that make up the *Trading Triangle* and some metrics that can be derived from these variables, such as *Profit Factor*.
Today I want to delve into why these metrics are my focus, buy looking at things through the lens of probability.
To do this, we are going to examine some different simulations of trading results that a trader could experience over the course of a year, based on their metrics from the *Trading Triangle*.
If you need a refresher on how to calculate these metrics for yourself, head over to my [post](/posts/trading-triangle/) on this subject.

### My YTD metrics for 2023

To begin, this exercise will assume that my metrics from this year are my actual expected performance, as this sample is the best I have at this point.
As we go through this exercise, you'll likely be surprised at the large variation of results that can occur in a given year, for a given trading level of trading skill.
In one year, a given trader's results can vary quite highly, based on how "lucky" they were, even with the same expected performance.

This year, on my trades closed YTD, I have achieved the following metrics
 - **Win Percentage**: 19.78%
 - **Profit to Loss Ratio**: 4.815
 - **Profit Factor**: 1.187

## Setting up the simulation

In this exercise, I'll simulate the results of 1,000 traders all trading for a year with my expected performance., which for this purpose I'm using 120 trades as a year, as this is my expected approximate number of trades for this year.

On each trade, the simulation will either pick it as a winner, or a loser, with a probability of winning of 19.78%.
The winning trades will be 4.815 times larger than the losing trades.

Each trader will start with $150,000 of capital, and will have an *Average Loss* of $297.46 and an *Average Win* of $1,432.29.
Our traders won't be scaling up or down their risk amount as capital grows, but will trade off a fixed NAV of the 150,000.

### What are we looking for?

The idea of this exercise being to look at what is the distribution of results I should expect, given my current level of skill in the market.
 - How likely am I to have a positive year?
 - What are the best and worst performing years?
 - What is the mean performance?
 - How are these results distributed?

## The Results

#### Distribution of End of Year Profit and Loss

![Distribution of Results](/assets/blog/monte-carlo/distribution-chris.png)

#### Resulting Metrics

 - **Sample Size**: 1,000 Trading Years consisting of 120 trades / year
 - **EV (Calculated)**: $5,361.87
 - **EV (Simulated)**: $5,206.19
 - **SD (Simulated)**: $7,485.12
 - **Worst Year**: -$14,938.45
 - **Best Year**: $33,494.49

#### How many years made a profit?

 - 767 years had an ending profit, while 233 years ended at a loss.

#### Confidence Intervals

 - **70%**: $629.28 - $9,278.02
 - **95%**: -$6,289.71 - $17,926.76
 - **99.7%**: -$13,208.71 - $28,305.25

#### Equity Graphs

I have cherry picked some individual samples to display on a graph.
We have our best and worst performers, as well as samples that finish around our 70 and 95% confidence intervals, as well as our median.
![Sample of Runs](/assets/blog/monte-carlo/sample-runs.png)

Do you find it surprising the magnitude of difference between the different possible results?
Remember that these are all traders of the same skill, with the same chances of profit on each trade.
In the real world, you have to keep yourself together when you start off your year like **trader_509**, or your results will fare even worse!

---
# How can I make more money?

Given that my goal is to progress my trading to the point that I can live off my trading profits, I'm going to need to earn more than $5,500 / year on average.
To do that, I have two paths to get there.
I could trade bigger, or I could get better, and likely some combination of the two.
I suspect it's rather obvious to you which path is ideal, but humor me and let's look at the results of the sims.
I think that most people think they need to trade bigger to make more money.

## Trade Bigger and Scale up my bets based on the Kelly Criterion

If I calculate the Quarter Kelly Criterion bet size for my distribution of wins/losses and payout ratio, I come up with a loss amount of 0.78% of the current balance.
In a future post, I'll dive more into the Kelly Criterion, but for now it will suffice to understand that it's a mathematical way to calculate the optimal portion of your bankroll to wager on an individual bet to maximize the rate of growth of your bankroll.  
You can read more about it on [Wikipedia](https://en.wikipedia.org/wiki/Kelly_criterion) if you're interested.
This next simulation increases my size to wager that amount, but it keeps all other statistics the same.

### Results

![Distribution of Kelly Bet Size](/assets/blog/monte-carlo/distribution-kelly.png)

This first thing you should notice is that we introduced a positive skew to our distribution.
This comes from the fact that as we are losing, we are scaling down our bet size, and as we are winning, we increase it.
The result is those times we get lucky and the good streak continues, we really end up with a blow out year.
This can perhaps be more clearly seen in looking at a box plot of our simulated samples.

![Box Plot of Kelly Bet Size Distribution](/assets/blog/monte-carlo/box-plot-kelly.png)

#### Resulting Metrics

 - **Sample Size**: 1,000 Trading Years consisting of 120 trades / year
 - **EV (Calculated)**: $21,089.71
 - **EV (Simulated)**: $22,793.44
 - **SD (Simulated)**: $34,882.34
 - **Worst Year**: -$58,351.33
 - **Best Year**: $216,373.07

#### How many years made a profit?

 - 704 years had an ending profit, while 296 years ended at a loss.

#### Confidence Intervals

 - **70%**: $6,703.97 - $37,383.47
 - **95%**: -$24,681.29 - $84,312.45
 - **99.7%**: -$49,780.60 - $156,430.39

### Observations

As you can see, the magnitude of our expected results got much higher.
Both positive and negative. 
Our worse annual loss in our simulated sample was $58k on a $150k balance.
That is really high and more risk than I am trying to take at this point.
It's worth pointing out that is is with a 1/4 Kelly, a full Kelly sizing system would certainly not be for the faint of heart!
The risk is compensated though, as our mean expected return went up to $22.8k with the high end of our 95% confidence interval returning over 50% from our starting capital.

![Sample of Kelly Sized Runs](/assets/blog/monte-carlo/sample-runs-kelly.png)

## Trade like a Pro

So far we've seen how a trader of my skill level can attempt to build up their account by scaling up and down their risk level as their year goes on.
This will certainly allow us to grow our account overtime, but it also assumes that my current results YTD are representative of my expected metrics going forward, and as we've seen, there can be significant deviation in a given year in how you actually perform vs your actual expectation.
Thus, my current results could be representative of a losing trader on a lucky streak.

I was curious how I would expect the simulation to look, if instead of 1,000 traders of my skill level, it was 1,000 traders of world class skill.

I was on a webinar recently where market wizard Peter Brandt [(@PeterLBrandt)](https://twitter.com/PeterLBrandt) shared his performance statistics for YTD 2023.

His *Win Percentage* was 50.4% with a *Profit Factor* of 4.0.
I'll run one final simulation for this post using Peter's statistics, but going back to my original bet-sizing.
I want to compare the raw results without the effect of scaling, but only changing the skill level.

### Results

![Distribution of Peter Skilled Results](/assets/blog/monte-carlo/distribution-peter.png)

This first thing you should notice is that we introduced a positive skew to our distribution.
This comes from the fact that as we are losing, we are scaling down our bet size, and as we are winning, we increase it.
The result is those times we get lucky and the good streak continues, we really end up with a blow out year.
This can perhaps be more clearly seen in looking at a box plot of our simulated samples.

#### Resulting Metrics

 - **Sample Size**: 1,000 Trading Years consisting of 120 trades / year
 - **EV (Calculated)**: $53,177.62
 - **EV (Simulated)**: $52,943.98
 - **SD (Simulated)**: $8,024.36
 - **Worst Year**: $20,144.12
 - **Best Year**: $78,922.60

#### How many years made a profit?

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

![Sample of Peter Skilled Traders](/assets/blog/monte-carlo/sample-runs-peter.png)

When you look at the distribution of equity curves, the worst year is still a pretty solid performance by most people's book.
They all look like a line that trends up an to the right.
